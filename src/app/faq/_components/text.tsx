type Props = {
  title?: string;
  subtitle?: React.ReactNode[];
};

export default function Contact({
    title = "Title",
    subtitle = ["Subtitle"]
}: Props) {
    return(
    <section className="bg-gray-50 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {title}
            </h2>

            <div className="mt-4 space-y-2 text-slate-600">
                {subtitle.map((line, index) => (
                    <p key={index}>{line}</p>
          ))}
        </div>
        </div>
    </section>
    );
}