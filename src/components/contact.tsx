import Link from "next/link";

type Props = {
  title?: string;
  subtitle?: string;
};

export default function Contact({
    title = "Get In Touch",
    subtitle = "Ready to take control of your financial future? Contact us today.",
}: Props) {
    return (
        <section id="contact" className="bg-white py-14 sm:py-16">
        {/* Heading + subtext */}
            <div className="mx-auto max-w-3xl px-4 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    {title}
                </h2>
                <p className="mt-3 text-slate-500">
                    {subtitle}
                </p>
            </div>
        
            <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 px-4 sm:gap-8 md:grid-cols-3">
                {/* Phone */}
                <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                            {/* Phone SVG */}
                            <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="var(--brand-teal)" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>                            </svg>
                        </div>
                    <h3 className="text-lg font-semibold text-slate-900">Phone</h3>
                    <p className="mt-3 text-lg font-semibold text-slate-900">+353 01 5637900</p>
                    <p className="mt-1 text-slate-500">Mon–Fri 9AM–5PM</p>
                </div>

                {/* Email */}
                <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                            {/* Mail SVG */}
                            <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="var(--brand-teal)" strokeWidth="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </div>
                    <h3 className="text-lg font-semibold text-slate-900">Email</h3>

                {/* CTA button as link */}
                    <Link
                        href="https://apps.docusign.com/api/maestro/v1/accounts/5c455682-c45b-45de-987f-beb6eb5a17dc/workflow_definitions/36ee6b8b-0cd9-46ef-9fab-cad6347d21da/trigger?mtid=55a012e4-14f6-4175-ad70-b917a19b1586"
                        className="mt-5 inline-flex items-center justify-center rounded-xl bg-brand-teal px-5 py-3 text-white font-medium shadow-sm transition hover:bg-brand-navy focus:outline-none focus:ring-2 focus:ring-[#01A7E3]/40"
                    >
                        Get In Touch
                        <svg viewBox="0 0 24 24" className="ml-2 h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>

                {/* Office */}
                <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                        {/* Map pin SVG */}
                        <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="var(--brand-teal)" strokeWidth="2">
                        <path d="M12 22s7-5.33 7-12a7 7 0 1 0-14 0c0 6.67 7 12 7 12z" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="10" r="3" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">Office</h3>

                    <p className="mt-3 text-slate-600">
                        Pension &amp; Financial, The Square,<br/>Enniskerry, Co. Wicklow, A98 PK26
                    </p>
                </div>
            </div>
        </section>
    );
}