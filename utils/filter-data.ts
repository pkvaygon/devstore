import { Shoe } from "./types";

export function getAllSizes(data: Shoe[]) {
  const allSizesSet: Set<number> = new Set();

  data.forEach((shoe: Shoe) => {
    shoe.sizes.forEach((size: string) => {
      allSizesSet.add(Number(size));
    });
  });

  const allSizes: string[] = Array.from(allSizesSet)
    .sort((a, b) => a - b)
    .map(String);
  // console.log(allSizes);
  return allSizes;
}
export function getAllColors(data: Shoe[]) {
  const colorMap = new Map();

  data.forEach((product) => {
    product.colors.forEach((color) => {
      if (!colorMap.has(color.hex)) {
        colorMap.set(color.hex, {
          color: color.color,
          hex: color.hex,
        });
      }
    });
  });

  const allColors = Array.from(colorMap.values());
  // console.log(allColors);
  return allColors;
}
export function getAllCategories(data: Shoe[]) {
  const allCategoriesSet: Set<string> = new Set([]);
  data.forEach((product) => {
    allCategoriesSet.add(product.category);
  });
  const allCategories = Array.from(allCategoriesSet);
  // console.log(allCategories);
  return allCategories;
}
export function getAllBrands(data: Shoe[]) {
  const allBrandsSet: Set<string> = new Set([]);
  data.forEach((product) => {
    allBrandsSet.add(product.brand);
  });
  const allBrands = Array.from(allBrandsSet);
  // console.log(allBrands);
  return allBrands;
}
