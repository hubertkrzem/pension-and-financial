"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-slate-600">
        We ran into an unexpected error. Please try again, or contact us if the
        problem persists.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-xl bg-brand-teal px-6 py-3 font-medium text-white shadow-sm transition hover:bg-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-teal/40"
      >
        Try again
      </button>
    </section>
  );
}
