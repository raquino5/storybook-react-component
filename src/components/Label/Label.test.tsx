import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Label } from "./Label";

test("Label component is visible", () => {
  render(<Label text="Visible Label" />);
  expect(screen.getByText("Visible Label")).toBeVisible();
});

test("Label changes style when disabled", () => {
  render(<Label text="Disabled Label" disabled />);
  const label = screen.getByText("Disabled Label");
  expect(label).toHaveStyle("color: #666");
  expect(label).toHaveStyle("background-color: #ccc");
  expect(label).toHaveStyle("cursor: not-allowed");
});

test("Label applies background color prop", () => {
  render(<Label text="Custom Color" backgroundColor="#588998" />);
  const label = screen.getByText("Custom Color");
  expect(label).toHaveStyle("background-color: #588998");
});