import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { mockFetch } from "./sanity-mock";
import OurServices from "@/app/_components/ourServices";
import AutoEnrolment from "@/app/_components/autoEnrolment";

const MOCK_HOME = {
  title: "Home Page",
  hero: {
    heading: "Welcome to Pension & Financial",
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
    bubble: {
      heading: "Auto Enrolment in Ireland",
      body: [
        { _type: "block", children: [{ _type: "span", text: "Auto-enrolment is coming to Ireland." }] },
      ],
      link: { linkLabel: "Read more →", linkAddress: "/auto-enrolment" },
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

describe("AutoEnrolment component", () => {
  it("renders the section header from Sanity data", () => {
    render(
      <AutoEnrolment
        header={MOCK_HOME.articleSection.header}
        bubble={MOCK_HOME.articleSection.bubble}
      />
    );
    expect(screen.getByText("Featured Article")).toBeInTheDocument();
  });

  it("renders the article heading from Sanity data", () => {
    render(
      <AutoEnrolment
        header={MOCK_HOME.articleSection.header}
        bubble={MOCK_HOME.articleSection.bubble}
      />
    );
    expect(screen.getByText("Auto Enrolment in Ireland")).toBeInTheDocument();
  });

  it("renders the article link from Sanity data", () => {
    render(
      <AutoEnrolment
        header={MOCK_HOME.articleSection.header}
        bubble={MOCK_HOME.articleSection.bubble}
      />
    );
    const link = screen.getByText("Read more →");
    expect(link.closest("a")).toHaveAttribute("href", "/auto-enrolment");
  });
});
