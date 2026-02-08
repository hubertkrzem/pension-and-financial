import { vi } from "vitest";

// Mock the Sanity client - all tests import this
export const mockFetch = vi.fn();

vi.mock("@/sanity/client", () => ({
  client: {
    fetch: (...args: unknown[]) => mockFetch(...args),
  },
}));
