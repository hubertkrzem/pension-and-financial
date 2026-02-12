import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ErrorPage from "@/app/error";

describe("Global error boundary (error.tsx)", () => {
  it("renders an error message and a retry button", () => {
    const reset = vi.fn();
    render(<ErrorPage error={new Error("Something broke")} reset={reset} />);

    expect(screen.getByRole("heading")).toHaveTextContent(/something went wrong/i);
    expect(screen.getByRole("button", { name: /try again/i })).toBeInTheDocument();
  });

  it("calls reset() when the retry button is clicked", async () => {
    const reset = vi.fn();
    render(<ErrorPage error={new Error("Something broke")} reset={reset} />);

    await userEvent.click(screen.getByRole("button", { name: /try again/i }));
    expect(reset).toHaveBeenCalledOnce();
  });
});
