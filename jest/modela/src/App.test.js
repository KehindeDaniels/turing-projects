import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  it("renders the home page", () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(
      getByText("Welcome to our church e-commerce platform!")
    ).toBeInTheDocument();
  });

  it("navigates to the products page", () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const productsLink = getByText("Products");
    fireEvent.click(productsLink);
    expect(getByText("Products")).toBeInTheDocument();
  });

  it("adds a product to the cart", () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const productsLink = getByText("Products");
    fireEvent.click(productsLink);
    const addToCartButton = getByText("Add to cart");
    fireEvent.click(addToCartButton);
    expect(getByText("Cart")).toBeInTheDocument();
  });

  it("updates the cart quantity", () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const productsLink = getByText("Products");
    fireEvent.click(productsLink);
    const addToCartButton = getByText("Add to cart");
    fireEvent.click(addToCartButton);
    const cartLink = getByText("Cart");
    fireEvent.click(cartLink);
    const quantityInput = getByText("Quantity: 1");
    fireEvent.click(getByText("+"));
    expect(getByText("Quantity: 2")).toBeInTheDocument();
  });

  it("removes a product from the cart", () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const productsLink = getByText("Products");
    fireEvent.click(productsLink);
    const addToCartButton = getByText("Add to cart");
    fireEvent.click(addToCartButton);
    const cartLink = getByText("Cart");
    fireEvent.click(cartLink);
    const removeButton = getByText("Remove");
    fireEvent.click(removeButton);
    expect(getByText("Your cart is empty.")).toBeInTheDocument();
  });
});
