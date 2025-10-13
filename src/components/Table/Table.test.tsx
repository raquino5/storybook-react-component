import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Table } from "./Table";

const headers = ["Name", "Age"];
const data = [["John", 28]];

test("renders the table component and is visible", () => {
  render(<Table headers={headers} data={data} />);
  const tableElement = screen.getByTestId("table-wrapper");
  expect(tableElement).toBeVisible();
});

test("applies disabled background color", () => {
  render(
    <Table headers={headers} data={data} disabled backgroundColor="#f0f0f0" />
  );
  const tableElement = screen.getByTestId("table-wrapper");
  expect(tableElement).toHaveStyle("opacity: 0.5");
  expect(tableElement).toHaveStyle("background-color: #f0f0f0");
});
