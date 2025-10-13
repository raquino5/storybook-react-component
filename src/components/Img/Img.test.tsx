import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Img } from "./Img";

describe("Img Component", () => {
  test("renders the image", () => {
    render(<Img src="https://cdn.britannica.com/53/252953-050-30D00122/Mickey-Mouse-Steamboat-Willie-Walt-Disney-Public-Domain.jpg" alt="test image" />);
    const imgElement = screen.getByAltText("test image");
    expect(imgElement).toBeInTheDocument();
  });

  test("applies disabled styles", () => {
    render(<Img src="https://cdn.britannica.com/53/252953-050-30D00122/Mickey-Mouse-Steamboat-Willie-Walt-Disney-Public-Domain.jpg" alt="disabled image" disabled />);
    const imgElement = screen.getByAltText("disabled image");
    expect(imgElement).toHaveStyle("opacity: 0.5");
    expect(imgElement).toHaveStyle("cursor: not-allowed");
  });
});
