import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { mockFetch } from "./sanity-mock";
import RiskIntro from "@/app/risk/_components/intro";
import RiskScale from "@/app/risk/_components/riskScale";

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

describe("RiskScale component", () => {
  it("renders Sanity warnings when provided", () => {
    const warnings = [
      { _type: "block", children: [{ _type: "span", text: "Value may go down." }] },
    ];
    render(<RiskScale warnings={warnings} />);
    expect(screen.getByText("Value may go down.")).toBeInTheDocument();
  });

  it("renders hardcoded notices when no warnings provided", () => {
    render(<RiskScale />);
    expect(screen.getByText("The value of your investment may go down as well as up.")).toBeInTheDocument();
  });

  it("renders Sanity level data when levels prop is provided", () => {
    const levels = [
      { name: "Custom Very Low", description: "Custom desc 1", profile: "Custom profile 1" },
      { name: "Custom Low", description: "Custom desc 2", profile: "Custom profile 2" },
    ];
    render(<RiskScale levels={levels} />);
    // Levels 1-2 use Sanity data
    expect(screen.getByText("Custom Very Low")).toBeInTheDocument();
    expect(screen.getByText("Custom desc 1")).toBeInTheDocument();
    expect(screen.getByText("Custom Low")).toBeInTheDocument();
    // Level 3+ falls back to hardcoded
    expect(screen.getByText("Low to Moderate Risk")).toBeInTheDocument();
  });

  it("falls back to hardcoded data when no levels prop provided", () => {
    render(<RiskScale />);
    expect(screen.getByText("Very Low Risk")).toBeInTheDocument();
    expect(screen.getByText("Very High Risk")).toBeInTheDocument();
  });
});
