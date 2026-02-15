import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { mockFetch } from "./sanity-mock";
import NavbarClient from "@/components/navbar-client";

const MOCK_BUTTON = {
  label: "Contact Us",
  link: "https://example.com/contact",
};

describe("NavbarClient", () => {
  beforeEach(() => {
    mockFetch.mockReset();
  });

  it("renders CTA button label from Sanity data", () => {
    render(<NavbarClient button={MOCK_BUTTON} />);
    const buttons = screen.getAllByText("Contact Us");
    expect(buttons.length).toBeGreaterThan(0);
  });

  it("renders hardcoded nav links", () => {
    render(<NavbarClient button={MOCK_BUTTON} />);
    expect(screen.getAllByText("Home").length).toBeGreaterThan(0);
    expect(screen.getAllByText("About").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Risk").length).toBeGreaterThan(0);
    expect(screen.getAllByText("FAQs").length).toBeGreaterThan(0);
  });

  it("renders the CTA button href from Sanity data", () => {
    render(<NavbarClient button={MOCK_BUTTON} />);
    const link = screen.getAllByText("Contact Us")[0].closest("a");
    expect(link).toHaveAttribute("href", "https://example.com/contact");
  });

  it("falls back to defaults when no button prop is provided", () => {
    render(<NavbarClient />);
    const buttons = screen.getAllByText("Get In Touch");
    expect(buttons.length).toBeGreaterThan(0);
    const link = buttons[0].closest("a");
    expect(link).toHaveAttribute("href", "#contact");
  });
});

describe("Navbar server component", () => {
  beforeEach(() => {
    mockFetch.mockReset();
    mockFetch.mockResolvedValue({ title: "Main Nav", button: MOCK_BUTTON });
  });

  it("calls client.fetch for navbar data", async () => {
    const { default: Navbar } = await import("@/components/navbar");
    await Navbar();
    expect(mockFetch).toHaveBeenCalledTimes(1);
  });
});
