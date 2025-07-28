"use client";

import { useMemo, useEffect, useState } from "react";
import TextAlign from "@tiptap/extension-text-align";
import { generateHTML } from "@tiptap/html";
import { type JSONContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import parse from "html-react-parser";

interface RenderDescriptionProps {
  json: JSONContent;
}

export const RenderDescription = ({ json }: RenderDescriptionProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const output = useMemo(() => {
    if (!isMounted) return "";

    return generateHTML(json, [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "pararaph"],
      }),
    ]);
  }, [json, isMounted]);

  if (!isMounted) {
    return (
      <div className="prose dark:prose-invert prose-li:marker:text-primary">
        <div className="animate-pulse space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="prose dark:prose-invert prose-li:marker:text-primary">
      {parse(output)}
    </div>
  );
};
