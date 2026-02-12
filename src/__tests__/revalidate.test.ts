import { describe, it, expect, vi, afterEach } from "vitest";
import { NextRequest } from "next/server";

// Mock next/cache before importing the route
vi.mock("next/cache", () => ({
  revalidatePath: vi.fn(),
}));

describe("GET /api/revalidate", () => {
  const originalEnv = process.env.REVALIDATE_SECRET;

  afterEach(() => {
    if (originalEnv !== undefined) {
      process.env.REVALIDATE_SECRET = originalEnv;
    } else {
      delete process.env.REVALIDATE_SECRET;
    }
  });

  it("returns 500 when REVALIDATE_SECRET is undefined", async () => {
    delete process.env.REVALIDATE_SECRET;
    const { GET } = await import("@/app/api/revalidate/route");
    const req = new NextRequest("http://localhost/api/revalidate?secret=anything");
    const res = await GET(req);
    expect(res.status).toBe(500);
  });

  it("returns 401 when secret doesn't match", async () => {
    process.env.REVALIDATE_SECRET = "correct-secret";
    const { GET } = await import("@/app/api/revalidate/route");
    const req = new NextRequest("http://localhost/api/revalidate?secret=wrong");
    const res = await GET(req);
    expect(res.status).toBe(401);
  });

  it("returns 200 when secret matches", async () => {
    process.env.REVALIDATE_SECRET = "correct-secret";
    const { GET } = await import("@/app/api/revalidate/route");
    const req = new NextRequest("http://localhost/api/revalidate?secret=correct-secret");
    const res = await GET(req);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.revalidated).toBe(true);
  });
});

describe("POST /api/revalidate", () => {
  const originalEnv = process.env.REVALIDATE_SECRET;

  afterEach(() => {
    if (originalEnv !== undefined) {
      process.env.REVALIDATE_SECRET = originalEnv;
    } else {
      delete process.env.REVALIDATE_SECRET;
    }
  });

  it("returns 500 when REVALIDATE_SECRET is undefined", async () => {
    delete process.env.REVALIDATE_SECRET;
    const { POST } = await import("@/app/api/revalidate/route");
    const req = new NextRequest("http://localhost/api/revalidate", {
      method: "POST",
      headers: { "x-sanity-secret": "anything" },
    });
    const res = await POST(req);
    expect(res.status).toBe(500);
  });

  it("returns 401 when x-sanity-secret header is missing", async () => {
    process.env.REVALIDATE_SECRET = "correct-secret";
    const { POST } = await import("@/app/api/revalidate/route");
    const req = new NextRequest("http://localhost/api/revalidate", { method: "POST" });
    const res = await POST(req);
    expect(res.status).toBe(401);
  });

  it("returns 200 with correct x-sanity-secret header", async () => {
    process.env.REVALIDATE_SECRET = "correct-secret";
    const { POST } = await import("@/app/api/revalidate/route");
    const req = new NextRequest("http://localhost/api/revalidate", {
      method: "POST",
      headers: { "x-sanity-secret": "correct-secret" },
    });
    const res = await POST(req);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.revalidated).toBe(true);
  });
});
