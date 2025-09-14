import Link from "next/link";

export default function AutoEnrollment() {
  return (
    <section className="bg-gray-50 pt-6 sm:pt-8 pb-14 sm:pb-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-lg font-bold text-slate-900 sm:text-3xl py-4">
          Featured Article
        </h2>

        {/* Featured article card */}
        <div className="border-1 bg-white rounded rounded-xl p-4 shadow-lg">
          <h2 className="text-2xl text-center font-bold tracking-tight text-slate-900 sm:text-3xl">
          Auto Enrolment in Ireland
        </h2>

        <p className="mt-4 text-slate-600">
          Auto-enrolment is coming to Ireland, bringing the biggest change to workplace pensions in decades.
          Employers will soon be required to automatically enrol eligible employees into a pension scheme,
          with both employer and employee contributions.
        </p>

        <p className="mt-6">
          <Link href="/auto-enrolment" className="font-semibold text-brand-teal hover:text-brand-navy">
            Learn more about what auto-enrolment means for you →
          </Link>
        </p>
        </div>
      </div>
    </section>
  );
}
