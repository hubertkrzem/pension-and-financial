import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-slate-600">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
        have been moved or no longer exists.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-brand-teal px-6 py-3 font-medium text-white shadow-sm transition hover:bg-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-teal/40"
      >
        Back to home
      </Link>
    </section>
  );
}
