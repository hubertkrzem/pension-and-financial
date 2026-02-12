import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { mockFetch } from "./sanity-mock";
import Contact from "@/components/contact";

const MOCK_CONTACT = {
  title: "Get in Touch",
  subtitle: "We are here to help with your financial planning.",
  phone: "01 272 5500",
  hours: "Mon–Fri, 9am–5pm",
  emailLink: {
    label: "Send us an email",
    url: "mailto:info@pensionandfinancial.ie",
  },
  officeAddress: ["89 Eagle Valley", "Enniskerry, Dublin 18"],
};

describe("Contact component", () => {
  beforeEach(() => {
    mockFetch.mockReset();
    mockFetch.mockResolvedValue(MOCK_CONTACT);
  });

  it("renders title and subtitle from Sanity", async () => {
    const html = await Contact();
    render(html);
    expect(screen.getByText("Get in Touch")).toBeInTheDocument();
    expect(screen.getByText("We are here to help with your financial planning.")).toBeInTheDocument();
  });

  it("renders the phone number", async () => {
    const html = await Contact();
    render(html);
    expect(screen.getByText("01 272 5500")).toBeInTheDocument();
  });

  it("renders the email link with correct href", async () => {
    const html = await Contact();
    render(html);
    const emailLink = screen.getByText("Send us an email");
    expect(emailLink.closest("a")).toHaveAttribute("href", "mailto:info@pensionandfinancial.ie");
  });

  it("renders the office address", async () => {
    const html = await Contact();
    render(html);
    expect(screen.getByText(/89 Eagle Valley/)).toBeInTheDocument();
    expect(screen.getByText(/Enniskerry, Dublin 18/)).toBeInTheDocument();
  });
});
