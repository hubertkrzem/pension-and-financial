type Props = {
  title?: string;
  subtitle?: string[];
};

export default function Hero({
    title = "Welcome to Pension & Financial",
    subtitle = [
    ]
}: Props) {
  return (
    <section
        className="relative min-h-[70vh] overflow-hidden"
        style={{
            backgroundImage: "url(/shop-front.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "50% 50%"
        }}
    >
    <div className="absolute inset-0 bg-black/50"></div>

    <div className="
        absolute left-[15%] top-[20%] md:left-[15%] md:top-[20%] lg:left-[20%] lg:top-[40%]
        max-w-[min(70ch,70vw)] rounded-2xl bg-white/30 backdrop-blur p-6 shadow-xl text-white"
    >

        <h1 className="text-3xl md:text-5xl font-semibold">
            {title}
        </h1>
        
        {subtitle.map((line, index) => (
        <p key={index} className="mt-3">
            {line}
        </p>
        ))}

    </div>
</section>
  );
}