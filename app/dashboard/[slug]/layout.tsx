import { getCourseSidebarData } from "@/app/data/course/get-course-sidebar-data";
import { CourseSidebar } from "../_components/course-sidebar";

interface DashboardSlugLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export default async function DashboardSlugLayout({
  children,
  params,
}: DashboardSlugLayoutProps) {
  const { slug } = await params;
  const { course } = await getCourseSidebarData(slug);

  return (
    <div className="flex flex-1">
      {/* sidebar - 30%*/}
      <div className="w-80 border-r border-border shrink-0">
        <CourseSidebar course={course} />
      </div>
      {/* content - 70% */}
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
}
