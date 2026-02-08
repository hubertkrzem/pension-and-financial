import { describe, it, expect } from "vitest";
import {
  CONTACT_QUERY,
  LEGAL_QUERY,
  HOME_PAGE_QUERY,
  ABOUT_PAGE_QUERY,
  RISK_PAGE_QUERY,
  FAQ_PAGE_QUERY,
  PERSONAL_PAGE_QUERY,
  CORPORATE_PAGE_QUERY,
  ARTICLE_PAGE_QUERY,
  NAVBAR_QUERY,
  FOOTER_QUERY,
} from "@/sanity/queries";

describe("GROQ queries", () => {
  it("exports CONTACT_QUERY targeting contact type", () => {
    expect(CONTACT_QUERY).toContain('_type == "contact"');
  });

  it("exports LEGAL_QUERY targeting legal type", () => {
    expect(LEGAL_QUERY).toContain('_type == "legal"');
  });

  it("exports HOME_PAGE_QUERY targeting homePage type", () => {
    expect(HOME_PAGE_QUERY).toContain('_type == "homePage"');
  });

  it("exports ABOUT_PAGE_QUERY targeting aboutPage type", () => {
    expect(ABOUT_PAGE_QUERY).toContain('_type == "aboutPage"');
  });

  it("exports RISK_PAGE_QUERY targeting riskPage type", () => {
    expect(RISK_PAGE_QUERY).toContain('_type == "riskPage"');
  });

  it("exports FAQ_PAGE_QUERY targeting faqPage type", () => {
    expect(FAQ_PAGE_QUERY).toContain('_type == "faqPage"');
  });

  it("exports PERSONAL_PAGE_QUERY targeting personalPage type", () => {
    expect(PERSONAL_PAGE_QUERY).toContain('_type == "personalPage"');
  });

  it("exports CORPORATE_PAGE_QUERY targeting corporate type", () => {
    expect(CORPORATE_PAGE_QUERY).toContain('_type == "corporate"');
  });

  it("exports ARTICLE_PAGE_QUERY targeting article type", () => {
    expect(ARTICLE_PAGE_QUERY).toContain('_type == "article"');
  });

  it("exports NAVBAR_QUERY targeting navbar type", () => {
    expect(NAVBAR_QUERY).toContain('_type == "navbar"');
  });

  it("exports FOOTER_QUERY targeting footer type", () => {
    expect(FOOTER_QUERY).toContain('_type == "footer"');
  });

  // Verify queries fetch key fields that match the schemas
  it("HOME_PAGE_QUERY fetches hero, services, articleSection", () => {
    expect(HOME_PAGE_QUERY).toContain("hero");
    expect(HOME_PAGE_QUERY).toContain("services");
    expect(HOME_PAGE_QUERY).toContain("articleSection");
  });

  it("ABOUT_PAGE_QUERY fetches hero, mission, ourTeam, whyUs1", () => {
    expect(ABOUT_PAGE_QUERY).toContain("hero");
    expect(ABOUT_PAGE_QUERY).toContain("mission");
    expect(ABOUT_PAGE_QUERY).toContain("ourTeam");
    expect(ABOUT_PAGE_QUERY).toContain("whyUs1");
  });

  it("FAQ_PAGE_QUERY fetches hero, contents, faqs, moreInfo", () => {
    expect(FAQ_PAGE_QUERY).toContain("hero");
    expect(FAQ_PAGE_QUERY).toContain("contents");
    expect(FAQ_PAGE_QUERY).toContain("faqs");
    expect(FAQ_PAGE_QUERY).toContain("moreInfo");
  });

  it("RISK_PAGE_QUERY fetches hero, riskAppetite, body", () => {
    expect(RISK_PAGE_QUERY).toContain("hero");
    expect(RISK_PAGE_QUERY).toContain("riskAppetite");
    expect(RISK_PAGE_QUERY).toContain("body");
  });

  it("PERSONAL_PAGE_QUERY and CORPORATE_PAGE_QUERY fetch hero, services", () => {
    expect(PERSONAL_PAGE_QUERY).toContain("hero");
    expect(PERSONAL_PAGE_QUERY).toContain("services");
    expect(CORPORATE_PAGE_QUERY).toContain("hero");
    expect(CORPORATE_PAGE_QUERY).toContain("services");
  });

  it("NAVBAR_QUERY fetches items and button", () => {
    expect(NAVBAR_QUERY).toContain("items");
    expect(NAVBAR_QUERY).toContain("button");
  });
});
