import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { mockFetch } from "./sanity-mock";
import Disclaimers from "@/app/legal/_components/disclaimers";
import ArticleContent from "@/components/article-content";

const MOCK_LEGAL = {
  heading: "Legal Disclaimers",
  content: [
    { heading: "Regulatory Disclosure", body: [{ _type: "block", children: [{ _type: "span", text: "Regulated by the Central Bank." }] }] },
    { heading: "Tax Disclaimer", body: [{ _type: "block", children: [{ _type: "span", text: "Tax treatment depends on circumstances." }] }] },
  ],
};

const MOCK_ARTICLE = {
  title: "Auto Enrolment",
  hero: {
    heading: "What Is Pension Auto-Enrolment?",
    body: [{ _type: "block", children: [{ _type: "span", text: "AE launches January 2026." }] }],
  },
  content: [
    { _type: "textTitleSection", heading: "Who Will Be Auto-Enrolled?", body: [{ _type: "block", children: [{ _type: "span", text: "Employees meeting criteria." }] }] },
    { _type: "textTitleSection", heading: "Contribution Rates", body: [{ _type: "block", children: [{ _type: "span", text: "Starts at 1.5%." }] }] },
  ],
};

describe("Legal page server component", () => {
  beforeEach(() => {
    mockFetch.mockReset();
    mockFetch.mockResolvedValue(MOCK_LEGAL);
  });

  it("calls client.fetch with LEGAL_QUERY", async () => {
    const { default: LegalPage } = await import("@/app/legal/page");
    await LegalPage();
    const call = mockFetch.mock.calls.find((c: string[]) => c[0].includes('"legal"'));
    expect(call).toBeDefined();
  });
});

describe("Disclaimers component", () => {
  it("renders disclaimer headings from Sanity", () => {
    render(<Disclaimers data={MOCK_LEGAL} />);
    expect(screen.getByText("Regulatory Disclosure")).toBeInTheDocument();
    expect(screen.getByText("Tax Disclaimer")).toBeInTheDocument();
  });

  it("renders disclaimer body from Sanity", () => {
    render(<Disclaimers data={MOCK_LEGAL} />);
    expect(screen.getByText("Regulated by the Central Bank.")).toBeInTheDocument();
  });
});

describe("ArticleContent component", () => {
  it("renders article section headings from Sanity", () => {
    render(<ArticleContent content={MOCK_ARTICLE.content} />);
    expect(screen.getByText("Who Will Be Auto-Enrolled?")).toBeInTheDocument();
    expect(screen.getByText("Contribution Rates")).toBeInTheDocument();
  });

  it("renders article body from Sanity", () => {
    render(<ArticleContent content={MOCK_ARTICLE.content} />);
    expect(screen.getByText("Employees meeting criteria.")).toBeInTheDocument();
  });
});
