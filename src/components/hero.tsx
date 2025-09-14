type Props = {
  title?: string[];
  subtitle?: string[];
};

export default function LockedHero({
  title = ["Welcome to", "Pension & Financial"],
}: Props) {
  return (
    <section className="relative h-[55vh] md:h-[70vh] overflow-hidden">
      {/* Small/medium: left-anchored, crop from right */}
      <svg
        className="absolute inset-0 block h-full w-full lg:hidden"
        viewBox="0 0 2092 900"
        preserveAspectRatio="xMinYMin slice"
        role="img"
        aria-label="Pension & Financial storefront in Enniskerry"
      >
        <image href="/shop-front.jpg" width="2092" height="1121" />
        <rect x="0" y="0" width="2092" height="1121" fill="black" opacity="0.5" />
        {/* Text box locked to image coords */}
        <foreignObject x="225" y="270" width="575" height="200">
          <div className="h-full w-full rounded-2xl bg-white/30 backdrop-blur p-6 shadow-xl text-white text-6xl font-semibold leading-tight">
            {title.map((line, index) => (
                    <h1 key={index}>{line}</h1>
            ))}
          </div>
        </foreignObject>
      </svg>

      {/* Large+: balanced composition on wide screens */}
      <svg
        className="absolute inset-0 hidden h-full w-full lg:block"
        viewBox="0 0 2092 900"
        preserveAspectRatio="xMidYMin slice"
        role="img"
        aria-label="Pension & Financial storefront in Enniskerry"
      >
        <image href="/shop-front.jpg" width="2092" height="1121" />
        <rect x="0" y="0" width="2092" height="1121" fill="black" opacity="0.5" />
        {/* Same coordinates work because we’re still in the image’s space */}
        <foreignObject x="225" y="270" width="575" height="200">
          <div className="h-full w-full rounded-2xl bg-white/30 backdrop-blur p-6 shadow-xl text-white text-4xl md:text-6xl font-semibold leading-tight">
            {title.map((line, index) => (
                    <h1 key={index}>{line}</h1>
            ))}
          </div>
        </foreignObject>
      </svg>
    </section>
  );
}