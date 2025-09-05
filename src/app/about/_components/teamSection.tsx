// /components/team/TeamSection.tsx
"use client";

import TeamCard from "@/app/about/_components/teamCard";
import { TEAM } from "@/app/about/data/team";

export default function TeamSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
          Meet our team
        </h2>

        <div className="mt-2 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <TeamCard key={m.id} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}