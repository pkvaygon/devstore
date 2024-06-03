"use client";

import { cn } from "@/utils/cn";
import { Button } from "@nextui-org/button";
import { useState } from "react";

const Size = ({ sizes }: { sizes: string[] }) => {
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  function onSelect(size: string) {
    const newSelectedSize = new Set(selectedSize);
    if (newSelectedSize.has(size)) {
      newSelectedSize.delete(size);
    } else {
      newSelectedSize.add(size);
    }
    setSelectedSize(Array.from(newSelectedSize));
    console.log(selectedSize);
  }
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-medium font-medium leading-8 text-slate-300">Size</h3>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <Button
            onClick={() => onSelect(size)}
            className={cn("inline min-w-12 text-sm  text-white", {
              "bg-secondary-400": selectedSize.includes(size),
              "bg-slate-800": !selectedSize.includes(size),
            })}
            size="sm"
            key={size}>
            {size}
          </Button>
        ))}
      </div>
    </div>
  );
};
export default Size;
