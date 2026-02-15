import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import NotFound from "@/app/not-found";

describe("Global not-found page (not-found.tsx)", () => {
  it("renders a 404 message", () => {
    render(<NotFound />);
    expect(screen.getByRole("heading")).toHaveTextContent(/page not found/i);
  });

  it("renders a link to the home page", () => {
    render(<NotFound />);
    const link = screen.getByRole("link", { name: /home/i });
    expect(link).toHaveAttribute("href", "/");
  });
});
