import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeroImage } from "./HeroImage";

describe("HeroImage Component", () => {
  const imageUrl =
    "https://cdn.britannica.com/53/252953-050-30D00122/Mickey-Mouse-Steamboat-Willie-Walt-Disney-Public-Domain.jpg";

  test("renders the component and displays the title", () => {
    render(<HeroImage imageUrl={imageUrl} title="Test Hero" />);
    const titleElement = screen.getByText("Test Hero");
    expect(titleElement).toBeVisible();
  });

  test("applies disabled styles when disabled prop is true", () => {
    render(<HeroImage imageUrl={imageUrl} title="Test Hero" disabled />);
    const titleElement = screen.getByText("Test Hero");

    expect(titleElement).toHaveStyle("opacity: 0.6");

    const wrapper = titleElement.closest("div");
    expect(wrapper).toHaveStyle("filter: grayscale(100%)");
    expect(wrapper).toHaveStyle("cursor: not-allowed");
  });
});
