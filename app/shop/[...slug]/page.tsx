"use client";
import { dbts } from "@/db";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/image";
import { Link, LinkIcon } from "@nextui-org/link";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Icon } from "@iconify/react";
import { cn } from "@/utils/cn";
import React from "react";
import { shippingAndReturns } from "@/static";
import { ReduxFunction } from "@/redux/functions";
import OverviewProduct from "@/components/Shop/OverviewProduct/ProductGallery";
import ProductInfo from "@/components/Shop/OverviewProduct/ProductInfo";
// export async function generateStaticParams() {
//     return dbts.map((product) => {
//         slug: product._id.$oid.toString()
//     })
// }
export default function OverviewProductPage({ params }: { params: any }) {
  const { slug } = params;
  const product = dbts.find((product) => product._id.$oid === slug[1]);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [currentColorIndex, setCurrentColorIndex] = React.useState(0);
  const [selectedSizes, setSelectedSizes] = React.useState<Set<string>>(
    new Set()
  );
  const newRating = [1, 2, 3, 4, 5];
  if (!product) {
    return <div>Product not found</div>;
  }
  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
  };
  const handleColorClick = (index: number) => {
    setCurrentColorIndex(index);
  };
  const handleSizeClick = (size: string) => {
    setSelectedSizes((prevSelectedSizes) => {
      const newSelectedSizes = new Set(prevSelectedSizes);
      if (newSelectedSizes.has(size)) {
        newSelectedSizes.delete(size);
      } else {
        newSelectedSizes.add(size);
      }
      console.log(newSelectedSizes);
      return newSelectedSizes;
    });
  };
  return (
    <section className="w-[90%] mx-auto h-auto lg:h-auto overflow-hidden p-4">
      <div
        className={cn(
          "relative w-full h-auto flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8"
        )}>
        <OverviewProduct
          product={product}
          currentColorIndex={currentColorIndex}
          currentImageIndex={currentImageIndex}
          handleImageClick={handleImageClick}
        />
        <ProductInfo
          product={product}
          newRating={newRating}
          currentColorIndex={currentColorIndex}
          handleColorClick={handleColorClick}
          handleSizeClick={handleSizeClick}
          selectedSizes={selectedSizes}
        />
      </div>
    </section>
  );
}
