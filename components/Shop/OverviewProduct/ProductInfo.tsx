"use client";
import React from 'react'
import { Icon } from "@iconify/react";
import { Shoe } from '@/utils/types';
import { cn } from '@/utils/cn';
import { Chip } from '@nextui-org/chip';
import { Link } from '@nextui-org/link';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { shippingAndReturns } from '@/static';
import { Button } from '@nextui-org/button';

interface ProductInfoProps{
    product: Shoe;
    newRating: number[];
    currentColorIndex: number;
    handleSizeClick: (size: string) => void;
    selectedSizes: any;
    handleColorClick: (index: number)=> void
}
const ProductInfo = ({
    product, newRating,
    currentColorIndex,
    selectedSizes,
    handleSizeClick,
    handleColorClick
}: ProductInfoProps) => {
  return (
    <div className="flex flex-col text-white gap-3">
    <h1 className="text-2xl font-bold tracking-tight">
      {product?.label}
    </h1>
    <h2 className="sr-only">Product information</h2>
    <div className="my-2 flex items-center gap-2">
      <div className="flex">
        {newRating.map((_, index) => (
          <Icon
            color="secondary"
            key={index}
            className={cn(
              "pointer-events-none transition-transform-colors text-yellow-400"
            )}
            icon="solar:star-bold"
            width="32"
          />
        ))}
      </div>
      <p className="text-small text-default-400">669 reviews</p>
    </div>
    <p className="text-xl font-medium tracking-tight">
      ${product?.price}
    </p>
    <div className="mt-4">
      <p className="sr-only">Product description</p>
      <p className="line-clamp-3 text-medium text-default-500">
        {product?.description}
      </p>
    </div>
    <div className="w-full flex flex-wrap justify-start gap-3 mt-5">
      {product.colors.map((color, index) => (
        <span
          onClick={() => handleColorClick(index)}
          className={`max-w-7 w-7 h-7 ring-1 rounded-full
transition-transform group-data-[pressed=true]:scale-90 ${
currentColorIndex === index
  ? "outline outline-offset-2 outline-purple-500"
  : ""
}`}
          key={index}
          style={{
            background: `linear-gradient(to right, ${color.hex} 50%, ${color.hex2} 50%)`,
          }}></span>
      ))}
    </div>
    <div className="mt-6 flex flex-col gap-1">
      <div className="mb-4 flex items-center gap-2 text-default-700">
        <Icon icon="carbon:delivery" width={24} />
        <p className="text-small font-medium">
          Free shipping and 30 days return
        </p>
      </div>
      <div className="flex flex-wrap justify-start items-center gap-2">
        {product.sizes.map((size, index) => (
          <Chip
            radius="sm"
            size="lg"
            key={index}
            className={`text-foreground ${
              selectedSizes.has(size) ? "bg-purple-500 text-white" : ""
            }`}
            onClick={() => handleSizeClick(size)}>
            {size}
          </Chip>
        ))}
      </div>
      <Link
        isExternal
        className="my-2 text-default-400"
        href="#"
        size="sm">
        See guide
        <Icon
          className="[&>path]:stroke-[2px]"
          icon="solar:arrow-right-up-linear"
        />
      </Link>
    </div>
    <Accordion
      className="-mx-1 mt-2"
      itemClasses={{
        title: "text-default-400",
        content: "pt-0 pb-6 text-base text-default-500",
      }}
      items={product.info}
      selectionMode="multiple">
      <AccordionItem key={0} title={"Information"}>
        <ul className="list-inside list-disc flex flex-col gap-2">
          <li className="text-default-500">
            Lace type : {product.lace_type}
          </li>
          {product?.info.map((info, index) => (
            <li key={index} className="text-default-500">
              {info}
            </li>
          ))}
        </ul>
      </AccordionItem>
      <AccordionItem key={1} title={"Shipping & Returns"}>
        <ul className="list-inside list-disc flex flex-col">
          {shippingAndReturns.map((info, index) => (
            <li className="text-default-500" key={index}>
              {info}
            </li>
          ))}
        </ul>
      </AccordionItem>
    </Accordion>
    <div className="mt-2 flex gap-2">
      <Button
        fullWidth
        className="text-medium font-medium"
        color="primary"
        size="lg"
        startContent={<Icon icon="solar:cart-large-2-bold" width={24} />}>
        Add to cart
      </Button>
      <Button
        isIconOnly
        className="text-default-600"
        size="lg"
        variant="flat">
        {true ? (
          <Icon icon="solar:heart-bold" width={24} />
        ) : (
          <Icon icon="solar:heart-linear" width={24} />
        )}
      </Button>
    </div>
  </div>
  )
}

export default ProductInfo
