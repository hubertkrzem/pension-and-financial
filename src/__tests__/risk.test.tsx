import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { mockFetch } from "./sanity-mock";
import RiskIntro from "@/app/risk/_components/intro";

const MOCK_RISK = {
  title: "Risk Page",
  hero: {
    heading: "Understanding Investment Risk",
    body: [{ _type: "block", children: [{ _type: "span", text: "All investments carry risk." }] }],
  },
  riskAppetite: {
    heading: "What is your risk appetite?",
    body: [{ _type: "block", children: [{ _type: "span", text: "Products are rated 1 to 7." }] }],
  },
  body: [{ _type: "block", children: [{ _type: "span", text: "Value may go down." }] }],
};

describe("Risk page server component", () => {
  beforeEach(() => {
    mockFetch.mockReset();
    mockFetch.mockResolvedValue(MOCK_RISK);
  });

  it("calls client.fetch with RISK_PAGE_QUERY", async () => {
    const { default: RiskPage } = await import("@/app/risk/page");
    await RiskPage();
    const riskCall = mockFetch.mock.calls.find((c: string[]) => c[0].includes("riskPage"));
    expect(riskCall).toBeDefined();
  });
});

describe("Risk Intro component", () => {
  it("renders heading from Sanity data", () => {
    render(<RiskIntro data={MOCK_RISK.riskAppetite} />);
    expect(screen.getByText("What is your risk appetite?")).toBeInTheDocument();
  });

  it("renders body from Sanity data", () => {
    render(<RiskIntro data={MOCK_RISK.riskAppetite} />);
    expect(screen.getByText("Products are rated 1 to 7.")).toBeInTheDocument();
  });
});
