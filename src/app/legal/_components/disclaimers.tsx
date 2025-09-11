type TemplateProps = {
  title: string;
  subtitle: string;
};

function Template({ title, subtitle }: TemplateProps) {
  return (
    <div className="mt-10 first:mt-0">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>

      <p className="text-slate-600">
        {subtitle}
      </p>
    </div>
  );
}


export default function Disclaimers() {
    return(
    <section className="bg-gray-50 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-left">
            <Template
            title="Regulatory Disclosure"
            subtitle="Pension and Financial is regulated by the Central Bank of Ireland and is authorised to
                    provide financial planning services, including life assurance, pensions, investment advice,
                    and risk benefits."
            />
            
            <Template
                title="General Advice Warning"
                subtitle="
                        The information on this website is provided for general information purposes only and does
                        not constitute financial advice. All investments carry risk, and past performance is not a
                        reliable guide to future performance. You should seek individualised advice before making
                        financial decisions."
            />
            <Template
                title="Tax Disclaimer"
                subtitle="
                        Tax treatment depends on individual circumstances and may be subject to change in the
                        future. You should consult with your tax advisor or financial professional before making
                        decisions based on tax legislation such as Section 72 or Section 73 planning."
            />
            <Template
                title="Pensions and Investment Risk"
                subtitle="
                        The value of investments and the income they produce can go down as well as up. You may
                        not get back the full amount you invested. Pensions are long-term investments and may be
                        subject to charges, early access penalties, or fund performance variability."
            />
            <Template
                title="Insurance Disclaimer"
                subtitle="
                        Life assurance and protection policies are subject to underwriting and policy terms and
                        conditions. Eligibility, benefits, and exclusions will apply and vary depending on the provider
                        and product type."
            />
            <Template
                title="Website content liability"
                subtitle="
                        Every effort has been made to ensure the accuracy of this information; however, we accept no
                        liability for any loss arising from reliance on the content provided herein. This site and its
                        content are subject to copyright and may not be reproduced without written permission."
            />
        </div>
    </section>
    );
}