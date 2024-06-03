"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import React from "react";

type Props = {
  categories: string[];
  brands: string[];
};

const CategoryGenderBrand = ({ categories, brands }: Props) => {
  const [selectedCategory, setSelectedCategory] = React.useState(categories);
    const [selectedBrand, setSelectedBrand] = React.useState(brands);
    const genders = ["men", "women", "unisex"]
  const [selectedGender, setSelectedGender] = React.useState(genders);
  return (
    <Accordion title="Category" className="text-black">
      <AccordionItem aria-label="category" title="Category">
        <CheckboxGroup
          defaultValue={categories}
          value={selectedCategory}
          onValueChange={setSelectedCategory}>
          {categories.map((category) => (
            <Checkbox value={category} color="secondary" key={category}>
              {category}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </AccordionItem>
      <AccordionItem aria-label="gender" title="Gender">
        <CheckboxGroup
          defaultValue={genders}
          value={selectedGender}
          onValueChange={setSelectedGender}>
          {genders.map((gender) => (
            <Checkbox value={gender} color="secondary" key={gender}>
              {gender}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </AccordionItem>
      <AccordionItem aria-label="brands" title="Brands">
        <CheckboxGroup
          defaultValue={brands}
          value={selectedBrand}
          onValueChange={setSelectedBrand}>
          {brands.map((brand) => (
            <Checkbox value={brand} color="secondary" key={brand}>
              {brand}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </AccordionItem>
    </Accordion>
  );
};

export default CategoryGenderBrand;
