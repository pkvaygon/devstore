"use client";
import PriceSlider, { PriceSliderProps } from "../ui/price-slider";

const Price =(props: PriceSliderProps)=> {
  return (
    <div className="my-4 flex flex-col gap-2">
      <h3 className="text-medium font-medium leading-8 text-slate-300">Price Range</h3>
      <PriceSlider
        animation="opacity"
        aria-label="Pricing Filter"
        range={{
          min: 0,
          defaultValue: [100, 500],
          max: 2000,
          step: 1,
        }}
        {...props}
      />
    </div>
  );
}
export default Price;
