import Link from 'next/link';
import Image from 'next/image';

export default function Article() {
  return (
    <section className="bg-gray-50 py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          What Is Pension Auto-Enrolment (AE)?
        </h2>
        <p className="mt-4 text-slate-600 text-left">
          The Irish Government&apos;s Auto-Enrolment (AE) pension scheme will launch in January 2026. 
          It aims to increase retirement savings by automatically enrolling eligible employees into a workplace pension scheme—unless they choose to opt out.
        </p>

        <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Who Will Be Auto-Enrolled?
        </h2>
        <p className="mt-4 text-slate-600 text-left">
        Employees who meet all of the following criteria:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-600 text-left marker:text-brand-teal">
          <li>Aged 23 to 60</li>
          <li>Earning between €20,000 - €80,000 more annually, including income from multiple jobs</li>
          <li>Includes company directors without existing payroll-deducted pensions</li>
        </ul>
        
        <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Contribution Rates
        </h2>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-600 text-left marker:text-brand-teal">
          <li>Starts at 1.5% from both employer and employee</li>
          <li>Increases gradually to 6% over 10 years</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Already have a company pension?
        </h2>
        <p className="mt-4 text-slate-600 text-left">
        You should:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-600 text-left marker:text-brand-teal">
          <li>Review employment contracts and handbooks</li>
          <li>Conduct a compliance review to:</li>
          <ul className="mt-2 list-discd space-y-1 pl-5 text-slate-600 text-left marker:text-brand-teal">
            <li>Ensure all eligible employees are covered</li>
            <li>Confirm contribution levels meet or exceed AE requirements</li>
            <li>Clarify eligibility criteria and opt-out procedures</li>
          </ul> 
        </ul>

        <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          No Existing Pension Scheme?
        </h2>
        <p className="mt-4 text-left text-slate-600">
        Now is the time to consider setting up a Company Pension with expert guidance from Pension & Financial. Benefits include:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-600 text-left marker:text-brand-teal">
          <li>Flexible contribution options</li>
          <li>Greater choice of investment funds</li>
          <li>Enhanced employee retention</li>
        </ul>

        <div className="max-w-3xl mx-auto">
          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Comparison Chart AE vs Company Scheme
          </h2>
          
          <Image
            src="/documents/auto-enrollment-table.png"
            alt="Table outlining pros and cons of a Company Pension vs Auto Enrollment"
            width={600}
            height={650}
            className="m-4 mx-auto block"
          />
          <p className="mt-4 text-slate-600 text-left">Note: Auto-Enrolment offers limited flexibility. It does not include tax relief or financial advice, which may disadvantage higher earners. 
            Company pensions offer greater flexibility, tax benefits, and tailored financial support.
          </p>
        </div>

        <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Support Your Employees&apos; Financial Future
        </h2>
        <p className="mt-4 text-slate-600 text-left">Offering a Company Pension shows your commitment to your team’s long-term wellbeing. Give your employees access to:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-600 text-left marker:text-brand-teal">
          <li>Personalised financial advice</li>
          <li>Greater investment options</li>
          <li>Stronger long-term pension value</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Additional Information
        </h2>
        <div className="text-left">
        <p className="mt-4">
          <Link href="AE-summary.pdf" className="font-semibold text-brand-teal hover:underline">
            Auto-Enrolment Key Highlights for Employers and Employees →
          </Link>
        </p>
        <p>
          <Link href="AE-detailed-presentation.pdf" className="font-semibold text-brand-teal hover:underline">
            Auto-Enrolment detailed presentation →
          </Link>
        </p>
        </div>
      </div>
    </section>
  );
}