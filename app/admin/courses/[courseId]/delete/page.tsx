"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useTransition } from "react";
import { tryCatch } from "@/hooks/try-catch";
import { toast } from "sonner";
import { deleteCourse } from "./actions";
import { useParams, useRouter } from "next/navigation";
import { Loader2, TrashIcon } from "lucide-react";

export default function DeleteCoursePage() {
  const { courseId } = useParams<{ courseId: string }>();
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  async function onSubmit() {
    startTransition(async () => {
      const { data: result, error } = await tryCatch(deleteCourse(courseId));

      if (error) {
        toast.error("An unexpected error occurred. Please try again later.");
      }
      if (result?.status === "success") {
        toast.success(result.message);
        router.push("/admin/courses");
      } else if (result?.status === "error") {
        toast.error(result.message);
      }
    });
  }

  return (
    <div className="max-w-xl mx-auto w-full">
      <Card className="mt-32">
        <CardHeader>
          <CardTitle>Are you sure you want to delete this course?</CardTitle>
          <CardDescription>
            This action cannot be undone. This will permanently delete the
            course and all its chapters and lessons.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <Link
            className={buttonVariants({ variant: "outline" })}
            href={`/admin/courses`}
          >
            Cancel
          </Link>
          <Button variant="destructive" onClick={onSubmit} disabled={pending}>
            {pending ? (
              <>
                <Loader2 className="size-4 animate-spin" /> Deleting...
              </>
            ) : (
              <>
                <TrashIcon className="size-4" /> Delete
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
