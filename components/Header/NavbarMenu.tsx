"use client";
import { navLinks } from "@/static";
import { NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavbarMenuComponent = () => {
  const pathname = usePathname()
  return (
    <NavbarMenu className="dark">
      {navLinks.map((navItem, index) => (
          <NavbarMenuItem isActive={pathname === navItem.href} key={index}>
            <Link className="flex gap-2 text-inherit text-white" href={navItem.href}>
              {navItem.name}
            </Link>
          </NavbarMenuItem>
        ))}
    </NavbarMenu>
  );
};
export default NavbarMenuComponent;
