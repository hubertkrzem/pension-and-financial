import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { mockFetch } from "./sanity-mock";
import ArticleContent from "@/components/article-content";

const MOCK_ARTICLE = {
  title: "Auto Enrolment",
  slug: { current: "auto-enrolment" },
  hero: {
    heading: "What Is Pension Auto-Enrolment?",
    body: [{ _type: "block", children: [{ _type: "span", text: "AE launches January 2026." }] }],
  },
  content: [
    { _type: "textTitleSection", heading: "Who Will Be Auto-Enrolled?", body: [{ _type: "block", children: [{ _type: "span", text: "Employees meeting criteria." }] }] },
    { _type: "textTitleSection", heading: "Contribution Rates", body: [{ _type: "block", children: [{ _type: "span", text: "Starts at 1.5%." }] }] },
  ],
};

describe("Dynamic article page server component", () => {
  beforeEach(() => {
    mockFetch.mockReset();
    mockFetch.mockResolvedValue(MOCK_ARTICLE);
  });

  it("calls client.fetch with a query containing article type and slug param", async () => {
    const { default: ArticlePage } = await import("@/app/articles/[slug]/page");
    await ArticlePage({ params: Promise.resolve({ slug: "auto-enrolment" }) });
    const call = mockFetch.mock.calls.find(
      (c: string[]) => c[0].includes('"article"') && c[0].includes("slug")
    );
    expect(call).toBeDefined();
    expect(call![1]).toEqual({ slug: "auto-enrolment" });
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
