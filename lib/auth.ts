import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./db";
import { env } from "./env";
import { emailOTP } from "better-auth/plugins";
import { resend } from "./resend";
import { admin } from "better-auth/plugins";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  socialProviders: {
    github: {
      clientId: env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: env.AUTH_GITHUB_CLIENT_SECRET,
    },
  },
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp }) {
        await resend.emails.send({
          from: "LMS Course Platform <onboarding@resend.dev>",
          to: [email],
          subject: "Your OTP code - Verify your email",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 400px; margin: 0 auto; background: #f9f9f9; border-radius: 8px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
              <h2 style="color: #333; margin-bottom: 16px;">Verify Your Email Address</h2>
              <p style="font-size: 16px; color: #444; margin-bottom: 12px;">
                Thank you for signing up to our LMS Course Platform!
              </p>
              <p style="font-size: 15px; color: #444; margin-bottom: 20px;">
                Please use the following OTP code to verify your email address:
              </p>
              <div style="text-align: center; margin: 24px 0;">
                <span style="display: inline-block; background: #e0e7ff; color: #3730a3; font-size: 28px; font-weight: bold; letter-spacing: 4px; padding: 12px 32px; border-radius: 6px;">
                  ${otp}
                </span>
              </div>
              <p style="font-size: 14px; color: #888;">
                This code will expire in 10 minutes. If you did not request this, you can safely ignore this email.
              </p>
              <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;">
              <p style="font-size: 12px; color: #bbb; text-align: center;">
                &copy; ${new Date().getFullYear()} LMS Course Platform
              </p>
            </div>
          `,
        });
      },
    }),
    admin(),
  ],
});
