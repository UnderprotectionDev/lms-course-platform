"use client";

import { AdminLessonType } from "@/app/data/admin/admin-get-lesson";
import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver, useForm } from "react-hook-form";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { lessonSchema, LessonSchemaType } from "@/lib/zod-schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { RichTextEditor } from "@/components/rich-text-editor/editor";
import { Uploader } from "@/components/file-uploader/uploader";
import { updateLesson } from "../actions";
import { tryCatch } from "@/hooks/try-catch";
import { toast } from "sonner";
import { useTransition } from "react";

interface LessonFormProps {
  courseId: string;
  chapterId: string;
  data: AdminLessonType;
}

export const LessonForm = ({ courseId, chapterId, data }: LessonFormProps) => {
  const [pending, startTransition] = useTransition();

  const form = useForm<LessonSchemaType>({
    resolver: zodResolver(lessonSchema) as Resolver<LessonSchemaType>,
    defaultValues: {
      name: data.title,
      courseId,
      chapterId,
      description: data.description ?? undefined,
      thumbnailKey: data.thumbnailKey ?? undefined,
      videoKey: data.videoKey ?? undefined,
    },
  });

  async function onSubmit(values: LessonSchemaType) {
    startTransition(async () => {
      const { data: result, error } = await tryCatch(
        updateLesson(data.id, values)
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
    <div>
      <Link
        className={buttonVariants({ variant: "outline", className: "mb-6" })}
        href={`/admin/courses/${courseId}/edit`}
      >
        <ArrowLeftIcon className="size-4" />
        <span>Go Back</span>
      </Link>

      <Card>
        <CardHeader>
          <CardTitle>Lesson Configuration</CardTitle>
          <CardDescription>
            Configure the video and description for this lesson
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lesson</FormLabel>
                    <FormControl>
                      <Input placeholder="Lesson Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <RichTextEditor field={field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="thumbnailKey"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Thumbnail</FormLabel>
                    <FormControl>
                      <Uploader
                        onChange={field.onChange}
                        value={field.value}
                        fileTypeAccepted="image"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="videoKey"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Video File</FormLabel>
                    <FormControl>
                      <Uploader
                        onChange={field.onChange}
                        value={field.value}
                        fileTypeAccepted="video"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={pending}>
                {pending ? "Saving..." : "Save Lesson"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
