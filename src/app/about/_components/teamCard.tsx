"use client";

import Image from "next/image";
import type { TeamMember } from "@/app/about/data/team";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="p-6">
      <div className="flex flex-col items-start">
        <div className="relative w-full aspect-[4/4] overflow-hidden rounded">
          <Image
            src={member.imageSrc || "/Portrait_Placeholder.png"}
            alt={member.imageAlt ?? member.name}
            fill
            className="w-full object-cover"
            sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vwwhat"
            priority={false}
          />
        </div>

        <h3 className="mt-4 text-xl font-bold leading-tight text-slate-900">
          {member.name}
        </h3>
        <p className="text-sky-600 font-medium">{member.role}</p>

        <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600">
          {member.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {member.badges?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {member.badges.map((b) => (
              <span
                key={b}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-brand-navy ring-1 ring-brand-navy/50"
              >
                {b}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}