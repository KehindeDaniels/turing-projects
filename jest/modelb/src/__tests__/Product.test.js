// src/__tests__/Product.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Product from "../components/Product";
import { StoreProvider } from "../utils/store";

test("renders Product component", () => {
  const product = { id: 1, name: "Book 1", price: 10.99 };
  render(
    <StoreProvider>
      <Product product={product} />
    </StoreProvider>
  );
  expect(screen.getByText("Book 1")).toBeInTheDocument();
});
