import { Shoe } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clsx } from "clsx";

export interface CartItemProps {
  id: string;
  name: string;
  image: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

export interface InitialStateProps {
  items: CartItemProps[];
  itemsQuantity: number;
  totalAmount: number;
}

const initialState: InitialStateProps = {
  items: [],
  itemsQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemProps>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) =>
          item.id === newItem.id &&
          item.size === newItem.size &&
          item.color === newItem.color
      );
      state.totalAmount += newItem.price;
      if (!existingItem) {
        state.itemsQuantity++;
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          color: newItem.color,
          size: newItem.size,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
