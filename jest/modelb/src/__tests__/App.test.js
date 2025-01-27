// src/__tests__/App.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders App component", () => {
  render(<App />);
  expect(screen.getByText("Welcome to Church E-commerce")).toBeInTheDocument();
});
