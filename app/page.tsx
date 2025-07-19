import { Button } from "@/components/ui/button";
import { ThemeToogle } from "@/components/ui/theme-toogle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Hello World</h1>
      <ThemeToogle />
    </div>
  );
}
