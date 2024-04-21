"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function MainNav({ headerHasScrolled }) {
  const pathname = usePathname();

  return (
    <nav className="items-center hidden gap-4 text-sm md:flex lg:gap-6">
      <Link
        href="#about"
        className={cn(
          "font-heading tracking-wider border-b-2 border-b-transparent transition-colors hover:text-primary/80",
          pathname === "/#about"
            ? "text-accent border-b-accent"
            : headerHasScrolled
            ? "text-primary hover:text-primary/80"
            : "text-secondary hover:text-secondary/80"
        )}
      >
        SOBRE
      </Link>

      <Link
        href="/projects"
        className={cn(
          "font-heading tracking-wider border-b-2 border-b-transparent transition-colors hover:text-primary/80",
          pathname?.startsWith("/projects")
            ? "text-accent border-b-accent"
            : headerHasScrolled
            ? "text-primary hover:text-primary/80"
            : "text-secondary hover:text-secondary/80"
        )}
      >
        PROJETOS
      </Link>

      <Link
        href="#contact"
        className={cn(
          "font-heading tracking-wider border-b-2 border-b-transparent transition-colors hover:text-primary/80",
          pathname === "/#contact"
            ? "text-accent border-b-accent"
            : headerHasScrolled
            ? "text-primary hover:text-primary/80"
            : "text-secondary hover:text-secondary/80"
        )}
      >
        CONTATO
      </Link>
    </nav>
  );
}
