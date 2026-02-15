import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { ArrowIcon, CloseIcon } from "@/components/icons";

describe("ArrowIcon", () => {
  it("renders an SVG element", () => {
    const { container } = render(<ArrowIcon />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});

describe("CloseIcon", () => {
  it("renders an SVG element", () => {
    const { container } = render(<CloseIcon />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
