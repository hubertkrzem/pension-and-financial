import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { mockFetch } from "./sanity-mock";
import Mission from "@/app/about/_components/mission";
import TeamSection from "@/app/about/_components/teamSection";
import WhyChooseUs from "@/app/about/_components/whyChooseUs";

const MOCK_ABOUT = {
  title: "About Page",
  hero: {
    heading: "About us",
    body: [{ _type: "block", children: [{ _type: "span", text: "Founded in 1992." }] }],
  },
  mission: {
    heading: "Our Mission",
    subheading: "John's guiding vision",
    quotes: ["Quality advice and service.", "Help you grow your assets."],
    author: "John Clare, Director",
    body: [{ _type: "block", children: [{ _type: "span", text: "Let us help you plan." }] }],
  },
  ourTeam: [
    {
      name: "John Clare",
      role: "Director",
      bio: [{ _type: "block", children: [{ _type: "span", text: "Three decades of expertise." }] }],
      qualifications: ["APA Certified", "CPD Compliant"],
      headshot: null,
    },
    {
      name: "Yvette Fidgeon",
      role: "Financial Advisor",
      bio: [{ _type: "block", children: [{ _type: "span", text: "25 years of experience." }] }],
      qualifications: ["QFA"],
      headshot: null,
    },
  ],
  whyUs1: {
    heading: "Why Choose Us?",
    body: [{ _type: "block", children: [{ _type: "span", text: "Local professional service." }] }],
  },
};

describe("About page server component", () => {
  beforeEach(() => {
    mockFetch.mockReset();
    mockFetch.mockResolvedValue(MOCK_ABOUT);
  });

  it("calls client.fetch with ABOUT_PAGE_QUERY", async () => {
    const { default: AboutPage } = await import("@/app/about/page");
    await AboutPage();
    const aboutCall = mockFetch.mock.calls.find((c: string[]) => c[0].includes("aboutPage"));
    expect(aboutCall).toBeDefined();
  });
});

describe("Mission component", () => {
  it("renders mission heading from Sanity", () => {
    render(<Mission data={MOCK_ABOUT.mission} />);
    expect(screen.getByText("Our Mission")).toBeInTheDocument();
  });

  it("renders quotes from Sanity", () => {
    render(<Mission data={MOCK_ABOUT.mission} />);
    expect(screen.getByText("Quality advice and service.")).toBeInTheDocument();
    expect(screen.getByText("Help you grow your assets.")).toBeInTheDocument();
  });

  it("marks decorative quote marks as aria-hidden", () => {
    const { container } = render(<Mission data={MOCK_ABOUT.mission} />);
    const quoteSpans = container.querySelectorAll("span[aria-hidden='true']");
    expect(quoteSpans.length).toBeGreaterThanOrEqual(2);
  });

  it("renders author attribution from Sanity", () => {
    render(<Mission data={MOCK_ABOUT.mission} />);
    expect(screen.getByText(/John Clare, Director/)).toBeInTheDocument();
  });
});

describe("TeamSection component", () => {
  it("renders team member names from Sanity", () => {
    render(<TeamSection members={MOCK_ABOUT.ourTeam} />);
    expect(screen.getByText("John Clare")).toBeInTheDocument();
    expect(screen.getByText("Yvette Fidgeon")).toBeInTheDocument();
  });

  it("renders team member roles from Sanity", () => {
    render(<TeamSection members={MOCK_ABOUT.ourTeam} />);
    expect(screen.getByText("Director")).toBeInTheDocument();
    expect(screen.getByText("Financial Advisor")).toBeInTheDocument();
  });

  it("renders qualification badges from Sanity", () => {
    render(<TeamSection members={MOCK_ABOUT.ourTeam} />);
    expect(screen.getByText("APA Certified")).toBeInTheDocument();
    expect(screen.getByText("QFA")).toBeInTheDocument();
  });
});

describe("WhyChooseUs component", () => {
  it("renders heading from Sanity", () => {
    render(<WhyChooseUs data={MOCK_ABOUT.whyUs1} />);
    expect(screen.getByText("Why Choose Us?")).toBeInTheDocument();
  });

  it("renders body text from Sanity", () => {
    render(<WhyChooseUs data={MOCK_ABOUT.whyUs1} />);
    expect(screen.getByText("Local professional service.")).toBeInTheDocument();
  });
});
