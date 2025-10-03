type Props = {
  title?: string;
  subtitle?: React.ReactNode[];
  className?: string;
};

export default function Intro({
    title = "Title",
    subtitle = ["Subtitle"],
    className = "bg-white"
}: Props) {
    return(
    <section className={`py-14 sm:py-16 ${className}`}>
        <div className="mx-auto max-w-3xl px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black text-center sm:text-4xl">
            {title}
            </h1>

            <div className="mt-4 space-y-2 text-slate-600">
                {subtitle.map((line, index) => (
                    <p key={index}>{line}</p>
          ))}
        </div>
        </div>
    </section>
    );
}