import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Text } from "./Text";

describe("Text component", () => {
  test("renders the text and is visible", () => {
    render(<Text>Visible Text</Text>);
    const element = screen.getByText("Visible Text");
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
  });

  test("applies correct styles when disabled", () => {
    render(
      <Text disabled backgroundColor="blue">
        Disabled Text
      </Text>
    );
    const element = screen.getByText("Disabled Text");
    expect(element).toHaveStyle("background-color: #ccc");
    expect(element).toHaveStyle("color: #999");
    expect(element).toHaveStyle("cursor: not-allowed");
  });

  test("applies background color when not disabled", () => {
    render(
      <Text backgroundColor="rgb(255, 0, 0)">
        Colored Text
      </Text>
    );
    const element = screen.getByText("Colored Text");
    expect(element).toHaveStyle("background-color: rgb(255, 0, 0)");
  });
});
