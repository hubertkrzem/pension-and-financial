import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { mockFetch } from "./sanity-mock";
import FaqSection from "@/app/faq/_components/faq-section";
import FaqContents from "@/app/faq/_components/faq-contents";

const MOCK_FAQ = {
  title: "FAQ Page",
  hero: {
    heading: "Frequently Asked Questions",
    body: [{ _type: "block", children: [{ _type: "span", text: "Financial planning can be complex." }] }],
  },
  contents: {
    heading: "Contents",
    body: [{ _type: "block", children: [{ _type: "span", text: "Jump to a section." }] }],
  },
  faqs: [
    {
      heading: "Pensions",
      items: [
        {
          heading: "What is a pension?",
          body: [{ _type: "block", children: [{ _type: "span", text: "A pension is a savings plan." }] }],
        },
        {
          heading: "Types of pensions?",
          body: [{ _type: "block", children: [{ _type: "span", text: "PRSAs, executive pensions." }] }],
        },
      ],
    },
    {
      heading: "Investment Policies",
      items: [
        {
          heading: "What are investment policies?",
          body: [{ _type: "block", children: [{ _type: "span", text: "Investment products for growth." }] }],
        },
      ],
    },
  ],
  moreInfo: {
    heading: "Need More Help?",
    body: [{ _type: "block", children: [{ _type: "span", text: "Contact us directly." }] }],
  },
};

describe("FAQ page server component", () => {
  beforeEach(() => {
    mockFetch.mockReset();
    mockFetch.mockResolvedValue(MOCK_FAQ);
  });

  it("calls client.fetch with FAQ_PAGE_QUERY", async () => {
    const { default: FaqPage } = await import("@/app/faq/page");
    await FaqPage();
    const faqCall = mockFetch.mock.calls.find((c: string[]) => c[0].includes("faqPage"));
    expect(faqCall).toBeDefined();
  });
});

describe("FaqSection component", () => {
  it("renders section heading from Sanity", () => {
    render(<FaqSection data={MOCK_FAQ.faqs[0]} />);
    expect(screen.getByText("Pensions")).toBeInTheDocument();
  });

  it("renders FAQ item titles from Sanity", () => {
    render(<FaqSection data={MOCK_FAQ.faqs[0]} />);
    expect(screen.getByText("What is a pension?")).toBeInTheDocument();
    expect(screen.getByText("Types of pensions?")).toBeInTheDocument();
  });
});

describe("FaqContents component", () => {
  it("renders contents heading from Sanity", () => {
    render(<FaqContents data={MOCK_FAQ.contents} faqs={MOCK_FAQ.faqs} />);
    expect(screen.getByText("Contents")).toBeInTheDocument();
  });

  it("renders links for each FAQ section", () => {
    render(<FaqContents data={MOCK_FAQ.contents} faqs={MOCK_FAQ.faqs} />);
    expect(screen.getByText("Pensions")).toBeInTheDocument();
    expect(screen.getByText("Investment Policies")).toBeInTheDocument();
  });
});
