import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

test("Button is visible", () => {
  render(<Button label="Test" />);
  expect(screen.getByText("Test")).toBeVisible();
});

test("Button changes background color when disabled", () => {
  render(<Button label="Disabled" disabled />);
  const button = screen.getByText("Disabled");
  expect(button).toHaveStyle("background-color: #ccc");
  expect(button).toBeDisabled();
});
