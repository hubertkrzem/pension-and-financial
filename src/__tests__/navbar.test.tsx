import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { mockFetch } from "./sanity-mock";
import NavbarClient from "@/components/navbar-client";

const MOCK_NAVBAR = {
  title: "Main Nav",
  items: [
    { label: "Home", link: [{ _type: "internalLink", internalReference: { slug: { current: "/" } } }], openInNewTab: false },
    { label: "About", link: [{ _type: "internalLink", internalReference: { slug: { current: "/about" } } }], openInNewTab: false },
  ],
  button: {
    label: "Contact Us",
    link: "https://example.com/contact",
  },
};

describe("NavbarClient", () => {
  beforeEach(() => {
    mockFetch.mockReset();
  });

  it("renders CTA button label from Sanity data", () => {
    render(<NavbarClient data={MOCK_NAVBAR} />);
    const buttons = screen.getAllByText("Contact Us");
    expect(buttons.length).toBeGreaterThan(0);
  });

  it("renders nav link labels from Sanity data", () => {
    render(<NavbarClient data={MOCK_NAVBAR} />);
    // Desktop and mobile both render these
    expect(screen.getAllByText("Home").length).toBeGreaterThan(0);
    expect(screen.getAllByText("About").length).toBeGreaterThan(0);
  });

  it("renders the CTA button href from Sanity data", () => {
    render(<NavbarClient data={MOCK_NAVBAR} />);
    const link = screen.getAllByText("Contact Us")[0].closest("a");
    expect(link).toHaveAttribute("href", "https://example.com/contact");
  });
});

describe("Navbar server component", () => {
  beforeEach(() => {
    mockFetch.mockReset();
    mockFetch.mockResolvedValue(MOCK_NAVBAR);
  });

  it("calls client.fetch for navbar data", async () => {
    // Dynamic import so the mock is in place
    const { default: Navbar } = await import("@/components/navbar");
    await Navbar();
    expect(mockFetch).toHaveBeenCalledTimes(1);
  });
});
