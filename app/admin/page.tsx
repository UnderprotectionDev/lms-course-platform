import { ChartAreaInteractive } from "@/components/sidebar/chart-area-interactive";
import { SectionCards } from "@/components/sidebar/section-cards";
import { adminGetEnrollmentStats } from "../data/admin/admin-get-enrollment-stats";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { adminGetRecentCourses } from "../data/admin/admin-get-recent-courses";
import { EmptyState } from "@/components/general/empty-state";
import {
  AdminCourseCard,
  AdminCourseCardSkeleton,
} from "./courses/_components/admin-course-card";
import { AdminGetCourseType } from "../data/admin/admin-get-courses";
import { Suspense } from "react";

export default async function AdminIndexPage() {
  const enrollmentData = await adminGetEnrollmentStats();

  return (
    <>
      <SectionCards />
      <ChartAreaInteractive data={enrollmentData} />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recent Courses</h2>
          <Link
            href="/admin/courses"
            className={buttonVariants({
              variant: "outline",
            })}
          >
            View All Courses
          </Link>
        </div>
        <Suspense fallback={<RecentCoursesSkeleton />}>
          <RenderRecentCourses />
        </Suspense>
      </div>
    </>
  );
}

async function RenderRecentCourses() {
  const data = await adminGetRecentCourses();

  if (data.length === 0) {
    return (
      <EmptyState
        title="You dont have any courses yet!"
        description="you dont have any courses. create some to see them here"
        href="/admin/courses/create"
        buttonText="Create new Course"
      />
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.map((course) => (
        <AdminCourseCard key={course.id} data={course as AdminGetCourseType} />
      ))}
    </div>
  );
}

function RecentCoursesSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Array.from({ length: 2 }).map((_, index) => (
        <AdminCourseCardSkeleton key={index} />
      ))}
    </div>
  );
}
