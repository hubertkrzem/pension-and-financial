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
        absolute left-[40%] top-[50%] md:left-[50%] md:top-[20%] lg:left-[50%] lg:top-[33%]
        max-w-[min(70ch,100vw)] rounded-2xl bg-white/30 backdrop-blur p-6 shadow-xl text-white"
    >
        <h1 className="text-3xl md:text-5xl font-semibold">
            Welcome to<br></br>
            Pension & Financial
        </h1>
    </div>
</section>
  );
}