export default function Hero() {
  return (
    <section
        className="relative min-h-[70vh] overflow-hidden"
        style={{
            backgroundImage: "url(/shop-clock-right.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "50% 50%"
        }}
    >
    <div className="absolute inset-0 bg-black/50"></div>

    <div className="
        absolute left-[40%] top-[20%] md:left-[50%] md:top-[20%] lg:left-[50%] lg:top-[25%]
        max-w-[min(70ch,100vw)] rounded-2xl bg-white/30 backdrop-blur p-6 shadow-xl text-white"
    >

        <h1 className="text-3xl md:text-5xl font-semibold">
            Welcome to<br></br>
            Pension & Financial
        </h1>
        
        <p className="mt-3">
            At Pension & Financial, we are proud to offer expert, 
            independent financial advice and personalised service to both corporate clients and high-net-worth individuals across Ireland.
        </p>
        <p className="mt-3">
            Founded in 1992, our firm is built on trust, professionalism, and a commitment to long-term client success.
        </p>

    </div>
</section>
  );
}