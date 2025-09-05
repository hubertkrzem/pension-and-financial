export default function Intro() {
    return(
    <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center"> {/* Delete red border marks */}
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            What is your risk appetite?
            </h2>

            <p className="mt-4 text-slate-600">
            Your risk appetite reflects how comfortable you are with fluctuations in the value
            of your investments or pension over time. In Ireland, products are rated on a risk
            scale from 1 to 7, regulated by the Central Bank.
            </p>
        </div>
    </section>
    );
}