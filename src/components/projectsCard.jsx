"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Icons } from "./icons";

export function ProjectCard({
    title,
    endpoint,
    description,
    emphasisContent,
    coverImage,
    category,
    locationType,
}) {
    const pathname = usePathname();

    return (
        <Card className="rounded-none border-none grid overflow-hidden group">
            <Image
                src={coverImage}
                alt={title}
                width={403}
                height={670}
                className="w-full h-full col-start-1 col-end-3 row-start-1 row-end-3"
            />

            <div
                id="hover-info"
                className="translate-y-0 sm:translate-y-full sm:group-hover:translate-y-0 col-start-1 col-end-3 row-start-1 row-end-3 flex flex-col justify-end transition-all ease-in-out delay-150 duration-300 p-4 w-full  bg-gradient-to-t from-[rgba(0,0,0,1)] via-[rgba(0,0,0,0.5)]"
            >
                <CardContent className="w-full p-0 pb-6 border-b border-gray-200 border-opacity-40 flex flex-col items-center gap-5">
                    <h2 className="font-heading text-xs text-accent tracking-[0.3em]">
                        {locationType}
                    </h2>
                    <p className="text-3xl text-white font-bold tracking-[0.12em]">
                        {title}
                    </p>
                </CardContent>
                <div className="w-full px-0 pb-4 pt-8">
                    <Button
                        asChild
                        variant="neutral"
                        size="auto"
                        className="flex justify-center w-full transition ease-in-out delay-150 duration-300 scale-105 hover:scale-125"
                    >
                        <Link href={`/projects/${endpoint}`}>
                            <Icons.arrowRight className="text-white" />
                        </Link>
                    </Button>
                </div>
            </div>
        </Card>
    );
}
