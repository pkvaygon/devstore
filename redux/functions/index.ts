"use client";

import { useDispatch, useSelector } from "react-redux";
import { CartItemProps, InitialStateProps, addToCart } from "../cartSlice";
import React from "react";

export const ReduxFunction = () => {
  const dispatch = useDispatch();
  const allItems = useSelector((state: any) => state.cart);
  React.useEffect(() => {
    console.log(allItems);
  }, [allItems]);

  function reduxAddtoCart(item: any) {
    console.log("fn add cart", item);
    dispatch(addToCart(item));
  }
  return { allItems, reduxAddtoCart };
};
