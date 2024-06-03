import { cn } from "@/utils/cn";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import React from "react";

interface ColorProps {
  color: string;
  hex: string;
}

const Color = ({ colors }: { colors: ColorProps[] }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-medium font-medium leading-8 text-slate-300">
        Color
      </h3>
      <div className="flex flex-wrap gap-2">
        {colors.map((color, index) => (
          <Tooltip
            classNames={{
              content: ["bg-slate-800 text-white"],
            }}
            key={index}
            content={color.color}>
            <Button
              radius="full"
              className={cn(
                `inline min-w-6 min-h-6 w-8 h-8 ring-2 ring-offset-0 bg-transparent`
              )}
              style={{
                background: color.hex,
              }}
              size="sm"
              key={index}
            />
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default Color;
