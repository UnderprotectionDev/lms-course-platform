"use server";

import { requireAdmin } from "@/app/data/admin/require-admin";
import { prisma } from "@/lib/db";
import { ApiResponse } from "@/lib/types";
import { lessonSchema, LessonSchemaType } from "@/lib/zod-schema";

export async function updateLesson(
  lessonId: string,
  values: LessonSchemaType
): Promise<ApiResponse> {
  await requireAdmin();

  try {
    const result = lessonSchema.safeParse(values);

    if (!result.success) {
      return { status: "error", message: "Invalid form data" };
    }

    await prisma.lesson.update({
      where: { id: lessonId },
      data: {
        title: result.data.name,
        description: result.data.description,
        thumbnailKey: result.data.thumbnailKey,
        videoKey: result.data.videoKey,
      },
    });

    return { status: "success", message: "Course updated successfully" };
  } catch {
    return { status: "error", message: "Failed to update course" };
  }
}
