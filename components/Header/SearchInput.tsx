"use client";

import { cn } from "@/utils/cn";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-search-input";

const SearchInput = ({ pathname }: { pathname: string }) => {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className={cn(`h-full flex flex-col justify-center items-center`, {
      "hidden": pathname !== "/shop"
    })}>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};
export default SearchInput;
