"use client";
import { cn } from "@/utils/cn";
import { Shoe } from "@/utils/types";
import { Button } from "@nextui-org/button";
import { Icon } from "@iconify/react";
import React from "react";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";

export default function Products({ data }: { data: Shoe[] }) {
  const [isStarred, setIsStarred] = React.useState(false);

  return (
    <div className="grid max-sm:grid-cols-1 grid-cols-3 gap-2">
      {data.map((product) => {
        const { label, colors, price, description } = product;
        return (
          <div
            key={product._id.$oid}
            className="relative w-full max-sm:h-[370px] h-80 flex gap-2 flex-col justify-start items-start bg-neutral-900 p-2 rounded-lg shadow-md">
            <Chip
              classNames={{
                base: "bg-gradient-to-br absolute left-7 top-7 z-20 from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                content: "drop-shadow shadow-black text-white",
              }}>
              NEW
            </Chip>
            <Button
              isIconOnly
              className={cn("absolute right-6 top-6 z-20")}
              radius="full"
              size="sm"
              variant="flat"
              onClick={() => setIsStarred(!isStarred)}>
              <Icon
                className={cn("text-default-500", {
                  "text-warning": isStarred,
                })}
                icon="solar:star-bold"
                width={16}
              />
            </Button>
            <div className="w-full h-4/5 overflow-hidden rounded-lg">
              <Image
                isZoomed
                radius="lg"
                alt={label}
                className={cn(
                  "z-0 h-full w-full overflow-visible object-contain object-center hover:scale-110"
                )}
                src={colors[0].images[0]}
              />
            </div>
              <div className="w-full flex justify-between px-2">
                <h3 className="text-sm  font-medium text-white">{label}</h3>
                <p className="text-medium  font-medium text-default-500">
                  ${price}
                </p>
              </div>
            <Button
              fullWidth
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-secondary-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Overview
              </span>
            </Button>
          </div>
        );
      })}
    </div>
  );
}
