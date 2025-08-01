"use client";

import { Button } from "@/components/ui/button";
import { tryCatch } from "@/hooks/try-catch";
import { useTransition } from "react";
import { enrollInCourseAction } from "../actions";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";

interface EnrollmentButtonProps {
  courseId: string;
}

export const EnrollmentButton = ({ courseId }: EnrollmentButtonProps) => {
  const [isPending, startTransition] = useTransition();

  function onSubmit() {
    startTransition(async () => {
      const { data: result, error } = await tryCatch(
        enrollInCourseAction(courseId)
      );

      if (error) {
        toast.error("An unexpected error occurred. Please try again later.");
      }
      if (result?.status === "success") {
        toast.success(result.message);
      } else if (result?.status === "error") {
        toast.error(result.message);
      }
    });
  }

  return (
    <Button onClick={onSubmit} disabled={isPending} className="w-full">
      {isPending ? (
        <>
          <Loader2Icon className="size-4 animate-spin" />
          Enrolling...
        </>
      ) : (
        "Enroll Now"
      )}
    </Button>
  );
};
