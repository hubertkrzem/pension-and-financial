import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gray-50 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT: Shopfront image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="inline-block rounded-xl bg-white shadow-2xl overflow-hidden">
              <Image
                src="/shop-front-zoom2.jpg"
                alt="Pension & Financial shopfront"
                width={1753}
                height={1017}
                className="block w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* RIGHT: Text section */}
          <div className="lg:col-span-6 text-slate-600 md:text-left mx-auto max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-black sm:text-4xl">
              Welcome to<br></br>Pension & Financial
            </h1>

            <div className="pt-8">
              <p>
                At Pension &amp; Financial, we are proud to offer expert, independent financial advice and
                personalised service to both corporate clients and high-net-worth individuals across Ireland.
                Founded in 1992 by John Clare, with over 33 years of experience in pensions and financial
                services, our firm is built on trust, professionalism, and a commitment to long-term client
                success.
              </p>

              <p className="mt-4">
                John’s vision has remained consistent since day one:
              </p>

              <p className="mt-4 w-100 mx-auto italic">
                “To offer only the highest quality professional pension and investment services with a
                personal and trusted approach.”
              </p>

              <p className="mt-4">
                We specialise in tailored financial planning services, provided in a clear, concise, confidential
                and considered manner, fully regulated by the Central Bank of Ireland.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}