import Link from "next/link";

export default function AutoEnrollment() {
  return (
    <section className="bg-gray-50 py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center"> {/* Delete red border marks */}
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Auto Enrolment in Ireland
        </h2>

        <p className="mt-4 text-slate-600">
          Auto-enrolment is coming to Ireland, bringing the biggest change to workplace pensions in decades.
          Employers will soon be required to automatically enrol eligible employees into a pension scheme,
          with both employer and employee contributions.
        </p>

        <p className="mt-6">
          <Link href="/auto-enrolment" className="font-semibold text-brand-teal hover:underline">
            Learn more about what auto-enrolment means for you →
          </Link>
        </p>

      </div>
    </section>
  );
}
