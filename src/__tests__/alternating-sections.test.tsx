import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import AlternatingSections from "@/components/alternating-sections";

describe("AlternatingSections", () => {
  it("assigns bg-white to the last child (bottom)", () => {
    const { container } = render(
      <AlternatingSections>
        <section>Hero</section>
        <section>Services</section>
        <section>Contact</section>
      </AlternatingSections>
    );
    const wrappers = container.querySelectorAll(":scope > div");
    expect(wrappers).toHaveLength(3);
    expect(wrappers[2].className).toBe("bg-white");
  });

  it("alternates bg-gray-50 and bg-white from bottom up", () => {
    const { container } = render(
      <AlternatingSections>
        <section>Hero</section>
        <section>Services</section>
        <section>Article</section>
        <section>Contact</section>
      </AlternatingSections>
    );
    const wrappers = container.querySelectorAll(":scope > div");
    expect(wrappers).toHaveLength(4);
    // From bottom: Contact=white, Article=gray, Services=white, Hero=gray
    expect(wrappers[3].className).toBe("bg-white");
    expect(wrappers[2].className).toBe("bg-gray-50");
    expect(wrappers[1].className).toBe("bg-white");
    expect(wrappers[0].className).toBe("bg-gray-50");
  });

  it("works with odd number of children", () => {
    const { container } = render(
      <AlternatingSections>
        <section>Hero</section>
        <section>Services</section>
        <section>Contact</section>
      </AlternatingSections>
    );
    const wrappers = container.querySelectorAll(":scope > div");
    // From bottom: Contact=white, Services=gray, Hero=white
    expect(wrappers[2].className).toBe("bg-white");
    expect(wrappers[1].className).toBe("bg-gray-50");
    expect(wrappers[0].className).toBe("bg-white");
  });

  it("filters out falsy children", () => {
    const { container } = render(
      <AlternatingSections>
        <section>Hero</section>
        {false && <section>Hidden</section>}
        {null}
        <section>Contact</section>
      </AlternatingSections>
    );
    const wrappers = container.querySelectorAll(":scope > div");
    expect(wrappers).toHaveLength(2);
    expect(wrappers[1].className).toBe("bg-white");
    expect(wrappers[0].className).toBe("bg-gray-50");
  });

  it("renders child content inside the wrapper divs", () => {
    const { getByText } = render(
      <AlternatingSections>
        <section>Hero Content</section>
        <section>Contact Content</section>
      </AlternatingSections>
    );
    expect(getByText("Hero Content")).toBeInTheDocument();
    expect(getByText("Contact Content")).toBeInTheDocument();
  });
});
