import React from "react";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";

const SocialLinks = ({ className, ...props }) => {
  return (
    <ul className={cn("flex flex-col gap-5 ", className)} {...props}>
      <li className="transition-colors text-muted hover:text-accent">
        <a href="">
          <Icons.facebook className="size-8" />
          <span className="sr-only">Facebook</span>
        </a>
      </li>

      <li className="transition-colors text-muted hover:text-accent animate-">
        <a href="">
          <Icons.instagram className="size-8" />
          <span className="sr-only">Instagram</span>
        </a>
      </li>

      <li className="transition-colors text-muted hover:text-accent">
        <a href="">
          <Icons.linkedin className="size-8" />
          <span className="sr-only">Linkedin</span>
        </a>
      </li>
      <li className="transition-colors text-muted hover:text-accent">
        <a href="">
          <Icons.whatsapp className="size-8" />
          <span className="sr-only">Whatsapp</span>
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
