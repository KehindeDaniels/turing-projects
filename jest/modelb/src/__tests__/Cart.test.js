// src/__tests__/Cart.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Cart from "../components/Cart";
import { StoreProvider } from "../utils/store";

test("renders Cart component", () => {
  const cart = [{ id: 1, name: "Book 1", price: 10.99, quantity: 1 }];
  render(
    <StoreProvider>
      <Cart cart={cart} />
    </StoreProvider>
  );
  expect(screen.getByText("Cart")).toBeInTheDocument();
});
