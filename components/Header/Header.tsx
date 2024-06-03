"use client";

import React from "react";

import { Icon } from "@iconify/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";

import Link from "next/link";
import { Button } from "@nextui-org/button";

import { navLinks } from "@/static";
import { usePathname } from "next/navigation";
import User from "./User";
import Cart from "./Cart";
import NavbarMenuComponent from "./NavbarMenu";
import SearchInput from "./SearchInput";
import { LogoIcon } from "@/static/icons";

export default function HeaderComponent() {
  const pathname = usePathname();
  return (
    <Navbar
      position="sticky"
      isBlurred
      classNames={{
        base: "p-2 dark h-[4rem] text-white",
        wrapper: "px-4 sm:px-6",
        item: "data-[active=true]:text-primary",
      }}
      height="60px">
      <NavbarBrand>
        <NavbarMenuToggle className="mr-2 h-6 sm:hidden" />
        <div className="flex items-center gap-2">
          <LogoIcon width={24} height={24} />
          <p className="font-bold text-white">AskarDev</p>
        </div>
      </NavbarBrand>
      <NavbarContent
        className="ml-4 hidden h-12 w-full max-w-fit gap-4 rounded-full bg-content2 px-4 dark:bg-content1 sm:flex"
        justify="start">
        {navLinks.map((navItem, index) => (
          <NavbarItem isActive={pathname === navItem.href} key={index}>
            <Link className="flex gap-2 text-inherit" href={navItem.href}>
              {navItem.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent
        className="ml-auto flex h-12 max-w-fit items-center gap-0 rounded-full p-0 lg:bg-content2 lg:px-1 lg:dark:bg-content1"
        justify="end">
        {/* Search */}
        <NavbarItem className="py-6 hidden lg:flex">
          <SearchInput pathname={pathname} />
        </NavbarItem>
        <NavbarItem className="flex">
          <Cart />
        </NavbarItem>
        {/* User Menu */}
        <NavbarItem className="px-2">
          <User />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuComponent />
    </Navbar>
  );
}
