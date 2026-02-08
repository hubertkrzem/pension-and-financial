import { client } from "@/sanity/client";
import { LEGAL_QUERY } from "@/sanity/queries";
import Disclaimers from "./_components/disclaimers";

export default async function Legal() {
  const page = await client.fetch(LEGAL_QUERY);

  return (
    <>
      {/* Title */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-left">
          <h1 className="text-slate-900 font-bold text-4xl">
            {page?.heading ?? "Legal Disclaimers"}
          </h1>
        </div>
      </section>

      {page && <Disclaimers data={page} />}
    </>
  );
}
