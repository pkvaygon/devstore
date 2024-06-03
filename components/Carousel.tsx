"use client";

import Link from "next/link";
import { ImageSlider } from "./ui/image-slider";
import { motion } from "framer-motion";

const Carousel = () => {
  const images = [
    "https://res.cloudinary.com/dxvf93ovn/image/upload/v1707634283/nextstore/shoes/ipad_under-armour-curry-one-golf-1_omjdgg.jpg",
    "https://res.cloudinary.com/dxvf93ovn/image/upload/v1707634392/nextstore/shoes/ipad_under-armour-curry-one-golf-3_mkkqpt.jpg",
    "https://res.cloudinary.com/dxvf93ovn/image/upload/v1707634127/nextstore/shoes/shoe41main_r1guzl.jpg",
    "https://res.cloudinary.com/dxvf93ovn/image/upload/v1707634420/nextstore/shoes/ipad_under-armour-curry-one-golf-4_pfovai.jpg",
  ];
  return (
    <ImageSlider className="h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center">
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Welcome to Askar Dev <br /> Online shoes store
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <Link href={'/shop'}>See catalog →</Link>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImageSlider>
  );
};
export default Carousel;
