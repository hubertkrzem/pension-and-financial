import Link from "next/link"

export default function Mission() {
  return (
    <section className="bg-gray-50 py-14 sm:py-16">
      <div className=" mx-auto max-w-6xl px-4 text-slate-600">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Our Mission</h2>
          <p className="mt-3">
            John’s guiding vision has remained consistent since day one:
          </p>
        </div>

        {/* Quotes */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          {/* Quote 1 */}
          <figure className="relative">
            <blockquote className="text-2xl sm:text-3xl font-semibold leading-relaxed text-slate-800 pl-8">
                <span className="absolute left-0 top-0 text-brand-teal text-6xl align-top leading-none select-none">“</span>
                    We promise to deliver a professional, friendly, and personal service that you can trust and rely on. 
                    Our first commitment to you is quality advice and service.
                <span className="absolute text-brand-teal text-6xl align-bottom leading-none select-none">”</span>
            </blockquote>
          </figure>

          {/* Quote 2 */}
          <figure className="relative">
            <blockquote className="text-2xl sm:text-3xl font-semibold leading-relaxed text-slate-800 pl-8">
                <span className="absolute left-0 top-0 text-brand-teal text-6xl align-top leading-none select-none">“</span>
                    We will deal with all your enquiries in a polite and courteous manner. Our aim is to
                    help you grow and protect your assets now and in the future.
                <span className="absolute text-brand-teal text-6xl align-bottom leading-none select-none">”</span>
            </blockquote>
          </figure>
        </div>

        {/* Attribution */}
        <p className="mt-8 text-center text-sm font-medium">
          — John Clare, Director
        </p>

        {/* Closing line */}
        <p className="mt-8 text-center max-w-3xl mx-auto">
          Let us help you plan for a stronger financial future — with advice you can trust and
          service you can depend on.
        </p>


        <p className="mx-auto max-w-3xl text-center mt-4 text-center">
            Whether you are an <Link className="underline font-semibold text-brand-teal" href="/services/personal">Individual</Link> preparing for a secure retirement,
            a <Link className="underline text-brand-teal font-semibold" href="/services/corporate">Business owner</Link> enhancing
            employee benefits, or a <Link className="underline text-brand-teal font-semibold" href="/services/personal">Family</Link> safeguarding generational wealth, we are here to deliver
            bespoke financial solutions you can trust.
          </p>
      </div>
    </section>
  );
}