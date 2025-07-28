import { prisma } from "@/lib/db";
import { env } from "@/lib/env";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const headerList = await headers();

  const signature = headerList.get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature error:", err);
    return new Response("Webhook error", { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (event.type === "checkout.session.completed") {
    const courseId = session.metadata?.courseId;
    const enrollmentId = session.metadata?.enrollmentId;
    const customerId = session.customer as string;

    if (!courseId || !enrollmentId) {
      return new Response("Course ID and Enrollment ID are required", {
        status: 400,
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        stripeCustomerId: customerId,
      },
    });

    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    try {
      const updated = await prisma.enrollment.update({
        where: {
          id: enrollmentId,
        },
        data: {
          status: "Active",
          amount: session.amount_total as number,
        },
      });
    } catch {
      return new Response("Enrollment update error", { status: 500 });
    }
  }

  return new Response(null, { status: 200 });
}
