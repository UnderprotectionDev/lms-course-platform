import { prisma } from "@/lib/db";
import { requireAdmin } from "./require-admin";

export async function adminGetCourses() {
  await requireAdmin();

  const data = await prisma.course.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      slug: true,
      smallDescription: true,
      duration: true,
      level: true,
      price: true,
      status: true,
      fileKey: true,
    },
  });

  return data;
}

export type AdminGetCourseType = Awaited<ReturnType<typeof adminGetCourses>>[0];
