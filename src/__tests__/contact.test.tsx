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

  it("renders without crashing when officeAddress is empty", async () => {
    mockFetch.mockResolvedValue({ ...MOCK_CONTACT, officeAddress: [] });
    const html = await Contact();
    const { container } = render(html);
    expect(container).toBeTruthy();
    expect(screen.getByText("Office")).toBeInTheDocument();
  });

  it("renders a single address line", async () => {
    mockFetch.mockResolvedValue({ ...MOCK_CONTACT, officeAddress: ["One Line"] });
    const html = await Contact();
    render(html);
    expect(screen.getByText("One Line")).toBeInTheDocument();
  });

  it("renders 3+ address lines", async () => {
    mockFetch.mockResolvedValue({
      ...MOCK_CONTACT,
      officeAddress: ["Line 1", "Line 2", "Line 3"],
    });
    const html = await Contact();
    render(html);
    expect(screen.getByText("Line 1")).toBeInTheDocument();
    expect(screen.getByText("Line 2")).toBeInTheDocument();
    expect(screen.getByText("Line 3")).toBeInTheDocument();
  });
});
