import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { mockFetch } from "./sanity-mock";
import Footer from "@/components/footer";

const MOCK_FOOTER = {
  regulatoryDisclosures: [
    { _type: "block", children: [{ _type: "span", text: "Regulated by the Central Bank of Ireland." }] },
  ],
  privacyPolicy: { asset: { url: "https://cdn.sanity.io/files/privacy.pdf" } },
  termsOfService: { asset: { url: "https://cdn.sanity.io/files/terms.pdf" } },
  legalDisclaimers: "/legal",
};

describe("Footer", () => {
  beforeEach(() => {
    mockFetch.mockReset();
    mockFetch.mockResolvedValue(MOCK_FOOTER);
  });

  it("calls client.fetch for footer data", async () => {
    const html = await Footer();
    render(html);
    expect(mockFetch).toHaveBeenCalledTimes(1);
  });

  it("renders a link to the privacy policy", async () => {
    const html = await Footer();
    render(html);
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
  });

  it("renders a link to Legal Disclaimers", async () => {
    const html = await Footer();
    render(html);
    expect(screen.getByText("Legal Disclaimers")).toBeInTheDocument();
  });
});
