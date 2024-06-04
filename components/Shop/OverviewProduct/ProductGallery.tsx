"use client";

import { Chip } from "@nextui-org/chip";
import { Icon } from "@iconify/react";
import { Image } from "@nextui-org/image";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { SetStateAction } from "react";
import { Shoe } from "@/utils/types";

interface OverviewProductProps {
  product: Shoe;
  currentImageIndex: number;
  currentColorIndex: number;
  handleImageClick: (index: number) => void;
}
const OverviewProduct = ({
  product,
  currentImageIndex,
  currentColorIndex,
  handleImageClick,
}: OverviewProductProps) => {
  return (
    <div className="relative h-full w-full flex-none">
      <Chip
        className="absolute left-3 top-3 z-20 h-10 gap-1 bg-background/60 pl-3 pr-2 text-foreground/90 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
        size="lg"
        startContent={<Icon icon="solar:star-bold" />}>
        Popular
      </Chip>
      {/* Main Image */}
      <Image
        isZoomed
        src={product.colors[currentColorIndex].images[currentImageIndex]}
        alt={product?.label}
        className="h-full w-full"
        radius="lg"
      />
      {/* Image Gallery */}
      <ScrollShadow
        className="-mx-2 -mb-4 mt-4 flex w-full max-w-full gap-4 px-2 pb-4 pt-2"
        orientation="horizontal">
        {product?.colors[currentColorIndex].images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            className="relative h-24 w-24 flex-none cursor-pointer items-center justify-center rounded-medium ring-offset-background transition-shadow data-[selected=true]:outline-none data-[selected=true]:ring-2 data-[selected=true]:ring-focus data-[selected=true]:ring-offset-2"
            data-selected={index}
            onClick={() => handleImageClick(index)}>
            <Image
              src={image}
              removeWrapper
              alt="sd"
              classNames={{
                img: "h-full w-full",
              }}
              radius="lg"
            />
          </button>
        ))}
      </ScrollShadow>
    </div>
  );
};
export default OverviewProduct;
