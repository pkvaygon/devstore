export type RangeValue = [number, number];

export type RangeFilter = {
  min: number;
  max: number;
  step: number;
  defaultValue: RangeValue;
};

export type Shoe = {
  _id: {
    $oid: string;
  };
  label: string;
  description: string;
  style: string;
  lace_type: string;
  info: string[];
  sizes: string[];
  price: number;
  old_price: number;
  in_stock: boolean;
  gender: string;
  category: string;
  brand: string;
  rating: number[];
  reviews: any[];
  colors: {
    color: string;
    color2: string;
    hex: string;
    hex2: string;
    images: string[];
  }[];
};
