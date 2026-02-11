import type { PortableTextBlock } from "@portabletext/react";
import TeamCard from "@/app/about/_components/teamCard";

type TeamMember = {
  name: string;
  role: string;
  bio: PortableTextBlock[];
  qualifications: string[];
  headshot?: { asset?: { url: string }; alt?: string } | null;
};

export default function TeamSection({ members }: { members: TeamMember[] }) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
          Meet our team
        </h2>

        <div className="mt-2 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {members?.map((m, i) => (
            <TeamCard key={i} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
