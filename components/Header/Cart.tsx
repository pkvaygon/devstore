"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { Badge } from "@nextui-org/badge";
import { Button } from "@nextui-org/button";
import { Icon } from "@iconify/react";

const Cart = () => {
  return (
    <Popover offset={12} placement="bottom-end">
      <PopoverTrigger>
        <Button
          disableRipple
          isIconOnly
          className="overflow-visible"
          radius="full"
          variant="light">
          <Badge color="secondary" content="5" showOutline={false} size="md">
            <Icon
              className="text-default-500"
              icon="solar:cart-4-bold"
              width={24}
            />
          </Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[90vw] p-0 sm:max-w-[380px]">
        {/* <NotificationsCard className="w-full shadow-none" /> */}
        <div></div>
      </PopoverContent>
    </Popover>
  );
};
export default Cart;
