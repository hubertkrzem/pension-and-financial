import Link from "next/link"

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center"> {/* Delete red border marks */}
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"> {/* Define style for h2 - use same style throughout*/}
            Why Choose Us?
          </h2>

          <ul className="mt-4 text-slate-600 text-left">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
              <span>Regulated and authorised by the Central Bank of Ireland.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
              <span>Local, professional service with nationwide expertise.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
              <span>Dedicated to impartial, client-first advice.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
              <span>Trusted experience in both corporate and wealth-managing services.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
              <span>We hold Agencies with all Investment & Pension providers.</span>
            </li>
          </ul>

          <p className="mt-4 text-slate-600">
            Whether you are an <Link className="underline font-semibold text-brand-teal" href="/services/personal">Individual</Link> preparing for a secure retirement,
            a <Link className="underline text-brand-teal font-semibold" href="/services/corporate">Business owner</Link> enhancing
            employee benefits, or a <Link className="underline text-brand-teal font-semibold" href="/services/personal">Family</Link> safeguarding generational wealth, we are here to deliver
            bespoke financial solutions you can trust.
          </p>
        </div>
      </section>
  );
}