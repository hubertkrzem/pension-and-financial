export default function Hero() {
  return (
    <section
        className="relative min-h-[70vh] overflow-hidden"
        style={{
            backgroundImage: "url(/shop-front-zoom.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "top"
        }}
    >
    <div className="absolute inset-0 bg-black/50"></div>
</section>
  );
}