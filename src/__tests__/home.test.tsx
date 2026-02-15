import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { mockFetch } from "./sanity-mock";
import OurServices from "@/app/_components/ourServices";
import FeaturedArticle from "@/app/_components/featuredArticle";
import HeroTextInput from "@/components/hero-text-input";

const MOCK_HOME = {
  title: "Home Page",
  hero: {
    heading: "Welcome to",
    headingLine2: "Pension & Financial",
    body: [
      { _type: "block", children: [{ _type: "span", text: "Expert independent financial advice." }] },
    ],
    image: null,
  },
  services: {
    heading: "Our Core Services",
    box1: {
      heading: "Corporate Clients",
      list: ["Corporate Pension Schemes", "Auto Enrolment"],
      link: { linkLabel: "Learn more →", linkAddress: "/services/corporate" },
    },
    box2: {
      heading: "High Net-Worth Individuals",
      list: ["Wealth Management", "Tax-Efficient Advice"],
      link: { linkLabel: "Learn more →", linkAddress: "/services/personal" },
    },
  },
  articleSection: {
    header: "Featured Article",
    featuredArticle: {
      featureCardTitle: "Auto Enrolment in Ireland",
      featureCardBlurb: [
        { _type: "block", children: [{ _type: "span", text: "Auto-enrolment is coming to Ireland." }] },
      ],
      featureCardLinkLabel: "Read more →",
      slug: { current: "auto-enrolment" },
    },
  },
};

describe("Home page server component", () => {
  beforeEach(() => {
    mockFetch.mockReset();
    mockFetch.mockResolvedValue(MOCK_HOME);
  });

  it("calls client.fetch with HOME_PAGE_QUERY", async () => {
    const { default: Home } = await import("@/app/page");
    await Home();
    const homeCall = mockFetch.mock.calls.find((c: string[]) => c[0].includes("homePage"));
    expect(homeCall).toBeDefined();
  });
});

describe("HeroTextInput component", () => {
  it("renders two-line heading when headingLine2 is provided", () => {
    render(
      <HeroTextInput
        title="Welcome to"
        headingLine2="Pension & Financial"
        body={MOCK_HOME.hero.body}
      />
    );
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1.innerHTML).toContain("Welcome to");
    expect(h1.innerHTML).toContain("<br>");
    expect(h1.innerHTML).toContain("Pension &amp; Financial");
  });

  it("renders single-line heading when headingLine2 is not provided", () => {
    render(
      <HeroTextInput
        title="About Us"
        body={MOCK_HOME.hero.body}
      />
    );
    expect(screen.getByText("About Us")).toBeInTheDocument();
  });

  it("renders blockquote content as centered and italic", () => {
    const quoteBody = [
      {
        _type: "block" as const,
        _key: "q1",
        style: "blockquote",
        children: [{ _type: "span" as const, _key: "s1", text: "A wise quote here" }],
      },
    ];
    render(<HeroTextInput title="Test" body={quoteBody} />);
    const quoteEl = screen.getByText("A wise quote here");
    expect(quoteEl.closest("[class*='italic']")).not.toBeNull();
    expect(quoteEl.closest("[class*='text-center']")).not.toBeNull();
  });

  it("renders normal body text without quote styling", () => {
    render(
      <HeroTextInput
        title="Test"
        body={MOCK_HOME.hero.body}
      />
    );
    expect(screen.getByText("Expert independent financial advice.")).toBeInTheDocument();
  });
});

describe("OurServices component", () => {
  it("renders the services heading from Sanity data", () => {
    render(
      <OurServices
        heading={MOCK_HOME.services.heading}
        box1={MOCK_HOME.services.box1}
        box2={MOCK_HOME.services.box2}
      />
    );
    expect(screen.getByText("Our Core Services")).toBeInTheDocument();
  });

  it("renders service box headings from Sanity data", () => {
    render(
      <OurServices
        heading={MOCK_HOME.services.heading}
        box1={MOCK_HOME.services.box1}
        box2={MOCK_HOME.services.box2}
      />
    );
    expect(screen.getByText("Corporate Clients")).toBeInTheDocument();
    expect(screen.getByText("High Net-Worth Individuals")).toBeInTheDocument();
  });

  it("renders service list items from Sanity data", () => {
    render(
      <OurServices
        heading={MOCK_HOME.services.heading}
        box1={MOCK_HOME.services.box1}
        box2={MOCK_HOME.services.box2}
      />
    );
    expect(screen.getByText("Corporate Pension Schemes")).toBeInTheDocument();
    expect(screen.getByText("Wealth Management")).toBeInTheDocument();
  });
});

describe("FeaturedArticle component", () => {
  it("renders the section header from Sanity data", () => {
    render(
      <FeaturedArticle
        header={MOCK_HOME.articleSection.header}
        featuredArticle={MOCK_HOME.articleSection.featuredArticle}
      />
    );
    expect(screen.getByText("Featured Article")).toBeInTheDocument();
  });

  it("renders the feature card title from referenced article", () => {
    render(
      <FeaturedArticle
        header={MOCK_HOME.articleSection.header}
        featuredArticle={MOCK_HOME.articleSection.featuredArticle}
      />
    );
    expect(screen.getByText("Auto Enrolment in Ireland")).toBeInTheDocument();
  });

  it("renders link with href /articles/{slug} derived from slug field", () => {
    render(
      <FeaturedArticle
        header={MOCK_HOME.articleSection.header}
        featuredArticle={MOCK_HOME.articleSection.featuredArticle}
      />
    );
    const link = screen.getByText("Read more →");
    expect(link.closest("a")).toHaveAttribute("href", "/articles/auto-enrolment");
  });
});
