"use client";

import { ReactNode, useState } from "react";
import Sidebar from "@/components/Sidebar";
import { ChevronRight } from "lucide-react";

interface DocsLayoutProps {
  children: ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex text-foreground w-full"
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="flex-1 overflow-y-auto" style={{ height: "100%" }}>
        <div className="container mx-auto max-w-4xl">
          <div
            onClick={() => setIsOpen(true)}
            className="md:hidden sticky top-0 z-50 p-4 backdrop-blur-md backdrop-brightness-50 flex items-center"
          >
            <ChevronRight className="h-5 w-5 mr-1" /> Menu
          </div>
          <div className="px-4 md:px-8">{children}</div>
        </div>
      </main>
    </div>
  );
}
