import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import type { PortableTextBlock } from "@portabletext/react";
import { mockFetch } from "./sanity-mock";

import Mission from "@/app/about/_components/mission";
import TeamSection from "@/app/about/_components/teamSection";
import WhyChooseUs from "@/app/about/_components/whyChooseUs";
import ServicesAccordion from "@/components/services-accordion";
import FaqSection from "@/app/faq/_components/faq-section";
import ArticleContent from "@/components/article-content";
import RiskScale from "@/app/risk/_components/riskScale";
import Contact from "@/components/contact";
import FeaturedArticle from "@/app/_components/featuredArticle";
import Disclaimers from "@/app/legal/_components/disclaimers";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Minimal valid PortableText block */
function ptBlock(text: string): PortableTextBlock {
  return {
    _type: "block",
    _key: Math.random().toString(36).slice(2),
    children: [{ _type: "span", _key: "s", text, marks: [] }],
    markDefs: [],
    style: "normal",
  } as unknown as PortableTextBlock;
}

/** Generate n accordion/FAQ-style items */
function makeItems(n: number) {
  return Array.from({ length: n }, (_, i) => ({
    heading: `Item ${i + 1}`,
    body: [ptBlock(`Body for item ${i + 1}`)],
  }));
}

/** Generate a string of length n */
function longText(n: number, char = "A") {
  return char.repeat(n);
}

// ---------------------------------------------------------------------------
// 2.1  Empty / missing data — component doesn't crash
// ---------------------------------------------------------------------------
describe("Stress: empty/missing data", () => {
  it("Mission — empty quotes, empty body, empty author", () => {
    const { container } = render(
      <Mission
        data={{
          heading: "H",
          subheading: "S",
          quotes: [],
          author: "",
          body: [],
        }}
      />,
    );
    expect(container).toBeTruthy();
  });

  it("TeamSection — empty members array", () => {
    const { container } = render(<TeamSection members={[]} />);
    expect(container).toBeTruthy();
    expect(screen.getByText("Meet our team")).toBeInTheDocument();
  });

  it("WhyChooseUs — empty body array", () => {
    const { container } = render(
      <WhyChooseUs data={{ heading: "Why Us", body: [] }} />,
    );
    expect(container).toBeTruthy();
    expect(screen.getByText("Why Us")).toBeInTheDocument();
  });

  it("ServicesAccordion — empty items array", () => {
    const { container } = render(
      <ServicesAccordion heading="Services" items={[]} />,
    );
    expect(container).toBeTruthy();
    expect(screen.getByText("Services")).toBeInTheDocument();
  });

  it("FaqSection — empty items array", () => {
    const { container } = render(
      <FaqSection data={{ heading: "FAQ", items: [] }} />,
    );
    expect(container).toBeTruthy();
    expect(screen.getByText("FAQ")).toBeInTheDocument();
  });

  it("ArticleContent — empty content array", () => {
    const { container } = render(<ArticleContent content={[]} />);
    expect(container).toBeTruthy();
  });

  it("RiskScale — empty levels, empty warnings", () => {
    const { container } = render(<RiskScale levels={[]} warnings={[]} />);
    expect(container).toBeTruthy();
  });

  it("Disclaimers — empty content array", () => {
    const { container } = render(
      <Disclaimers data={{ heading: "Legal", content: [] }} />,
    );
    expect(container).toBeTruthy();
  });

  it("Disclaimers — null content", () => {
    const { container } = render(
      <Disclaimers
        data={{ heading: "Legal", content: null as unknown as PortableTextBlock[] }}
      />,
    );
    expect(container).toBeTruthy();
  });

  it("Contact — empty officeAddress via mockFetch", async () => {
    mockFetch.mockResolvedValue({
      title: "Contact",
      subtitle: "Sub",
      phone: "000",
      hours: "9-5",
      emailLink: { label: "Email", url: "mailto:x@x.com" },
      officeAddress: [],
    });
    const html = await Contact();
    const { container } = render(html);
    expect(container).toBeTruthy();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("FeaturedArticle — null slug renders without crashing", () => {
    const { container } = render(
      <FeaturedArticle
        header="Featured"
        featuredArticle={{
          featureCardTitle: "Title",
          featureCardBlurb: [ptBlock("blurb")],
          featureCardLinkLabel: "Read",
          slug: null as unknown as { current: string },
        }}
      />,
    );
    expect(container).toBeTruthy();
    expect(screen.getByText("Title")).toBeInTheDocument();
    // Link should not render when slug is null
    expect(screen.queryByText("Read")).not.toBeInTheDocument();
  });

  it("FeaturedArticle — null featureCardBlurb renders without crashing", () => {
    const { container } = render(
      <FeaturedArticle
        header="Featured"
        featuredArticle={{
          featureCardTitle: "Title",
          featureCardBlurb: null as unknown as PortableTextBlock[],
          featureCardLinkLabel: "Read",
          slug: { current: "test" },
        }}
      />,
    );
    expect(container).toBeTruthy();
    expect(screen.getByText("Title")).toBeInTheDocument();
  });
});

// ---------------------------------------------------------------------------
// 2.2  Large arrays — renders without error
// ---------------------------------------------------------------------------
describe("Stress: large arrays", () => {
  it("ServicesAccordion — 50 items", () => {
    const { container } = render(
      <ServicesAccordion heading="Many" items={makeItems(50)} />,
    );
    expect(container).toBeTruthy();
    expect(screen.getByText("Item 50")).toBeInTheDocument();
  });

  it("FaqSection — 50 items", () => {
    const { container } = render(
      <FaqSection data={{ heading: "FAQ", items: makeItems(50) }} />,
    );
    expect(container).toBeTruthy();
    expect(screen.getByText("Item 50")).toBeInTheDocument();
  });

  it("TeamSection — 20 members", () => {
    const members = Array.from({ length: 20 }, (_, i) => ({
      name: `Member ${i + 1}`,
      role: "Role",
      bio: [ptBlock("Bio text")],
      qualifications: ["QFA"],
    }));
    const { container } = render(<TeamSection members={members} />);
    expect(container).toBeTruthy();
    expect(screen.getByText("Member 20")).toBeInTheDocument();
  });

  it("ArticleContent — 50 mixed blocks", () => {
    const content = Array.from({ length: 50 }, (_, i) => ({
      _type: i % 2 === 0 ? "textTitleSection" : "block",
      heading: `Section ${i}`,
      body: [ptBlock(`Paragraph ${i}`)],
    }));
    const { container } = render(<ArticleContent content={content} />);
    expect(container).toBeTruthy();
    expect(screen.getByText("Section 48")).toBeInTheDocument();
  });
});

// ---------------------------------------------------------------------------
// 2.3  Long text — no layout crash
// ---------------------------------------------------------------------------
describe("Stress: long text", () => {
  it("Mission — heading 500 chars", () => {
    const { container } = render(
      <Mission
        data={{
          heading: longText(500),
          subheading: "S",
          quotes: [],
          author: "",
          body: [],
        }}
      />,
    );
    expect(container).toBeTruthy();
  });

  it("Mission — quote 1000 chars", () => {
    const { container } = render(
      <Mission
        data={{
          heading: "H",
          subheading: "S",
          quotes: [longText(1000)],
          author: "",
          body: [],
        }}
      />,
    );
    expect(container).toBeTruthy();
  });

  it("ServicesAccordion — heading 500 chars", () => {
    const { container } = render(
      <ServicesAccordion heading={longText(500)} items={[]} />,
    );
    expect(container).toBeTruthy();
  });

  it("FaqSection — heading 500 chars", () => {
    const { container } = render(
      <FaqSection data={{ heading: longText(500), items: [] }} />,
    );
    expect(container).toBeTruthy();
  });
});

// ---------------------------------------------------------------------------
// 2.4  Special characters in section ID generation
// ---------------------------------------------------------------------------
describe("Stress: special characters in section IDs", () => {
  it("FaqSection — heading with & < > \" ' produces a clean section ID", () => {
    const { container } = render(
      <FaqSection data={{ heading: `Q & A <"test"> it's`, items: [] }} />,
    );
    const section = container.querySelector("section");
    expect(section).toBeTruthy();
    const id = section!.getAttribute("id")!;
    expect(id).toBeTruthy();
    // ID should not contain special characters
    expect(id).not.toMatch(/[<>"'&]/);
    // Should produce a clean slug like "q-a-test-it-s"
    expect(id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });
});
