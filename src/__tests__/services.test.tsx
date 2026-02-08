import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { mockFetch } from "./sanity-mock";
import ServicesAccordion from "@/components/services-accordion";

const MOCK_PERSONAL = {
  title: "Personal Page",
  hero: {
    heading: "Personal Wealth Management",
    body: [{ _type: "block", children: [{ _type: "span", text: "Tailored solutions." }] }],
  },
  services: {
    heading: "Our Personal Services",
    items: [
      { heading: "Wealth Management", body: [{ _type: "block", children: [{ _type: "span", text: "Personalised strategies." }] }] },
      { heading: "Investment Policies", body: [{ _type: "block", children: [{ _type: "span", text: "Strong returns." }] }] },
    ],
  },
};

const MOCK_CORPORATE = {
  title: "Corporate Page",
  hero: {
    heading: "Company Financial Services",
    body: [{ _type: "block", children: [{ _type: "span", text: "Professional support." }] }],
  },
  services: {
    heading: "Our Corporate Services",
    items: [
      { heading: "Company Pension Schemes", body: [{ _type: "block", children: [{ _type: "span", text: "Valuable benefits." }] }] },
      { heading: "Group Risk", body: [{ _type: "block", children: [{ _type: "span", text: "Employee wellbeing." }] }] },
    ],
  },
};

describe("Personal page server component", () => {
  beforeEach(() => {
    mockFetch.mockReset();
    mockFetch.mockResolvedValue(MOCK_PERSONAL);
  });

  it("calls client.fetch with PERSONAL_PAGE_QUERY", async () => {
    const { default: PersonalPage } = await import("@/app/services/personal/page");
    await PersonalPage();
    const call = mockFetch.mock.calls.find((c: string[]) => c[0].includes("personalPage"));
    expect(call).toBeDefined();
  });
});

describe("Corporate page server component", () => {
  beforeEach(() => {
    mockFetch.mockReset();
    mockFetch.mockResolvedValue(MOCK_CORPORATE);
  });

  it("calls client.fetch with CORPORATE_PAGE_QUERY", async () => {
    const { default: CorporatePage } = await import("@/app/services/corporate/page");
    await CorporatePage();
    const call = mockFetch.mock.calls.find((c: string[]) => c[0].includes("corporate"));
    expect(call).toBeDefined();
  });
});

describe("ServicesAccordion component", () => {
  it("renders section heading from Sanity", () => {
    render(<ServicesAccordion heading={MOCK_PERSONAL.services.heading} items={MOCK_PERSONAL.services.items} />);
    expect(screen.getByText("Our Personal Services")).toBeInTheDocument();
  });

  it("renders service item headings from Sanity", () => {
    render(<ServicesAccordion heading={MOCK_PERSONAL.services.heading} items={MOCK_PERSONAL.services.items} />);
    expect(screen.getByText("Wealth Management")).toBeInTheDocument();
    expect(screen.getByText("Investment Policies")).toBeInTheDocument();
  });

  it("renders corporate items from Sanity", () => {
    render(<ServicesAccordion heading={MOCK_CORPORATE.services.heading} items={MOCK_CORPORATE.services.items} />);
    expect(screen.getByText("Company Pension Schemes")).toBeInTheDocument();
    expect(screen.getByText("Group Risk")).toBeInTheDocument();
  });
});
