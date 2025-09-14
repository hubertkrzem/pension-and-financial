export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Why Choose Us?
          </h2>

          <ul className="mt-4 text-slate-600 text-left">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
              <span>Local, <span className="text-brand-teal font-bold">professional</span> service with nationwide expertise.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
              <span>Dedicated to <span className="text-brand-teal font-bold">impartial</span>, client-first advice.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
              <span>Trusted experience in both <span className="text-brand-teal font-bold">corporate</span> and <span className="text-brand-teal font-bold">wealth-managing</span> services.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
              <span>We work with all Investment & Pension providers.</span>
            </li>
          </ul>
        </div>
      </section>
  );
}