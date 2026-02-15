import Image from "next/image";
import { PortableText, type PortableTextBlock } from "@portabletext/react";

type TeamMember = {
  name: string;
  role: string;
  bio: PortableTextBlock[];
  qualifications: string[];
  headshot?: { asset?: { url: string }; alt?: string } | null;
};

export default function TeamCard({ member }: { member: TeamMember }) {
  const imageUrl = member.headshot?.asset?.url || "/Portrait_Placeholder.png";
  const imageAlt = member.headshot?.alt || member.name;

  return (
    <article className="p-6">
      <div className="flex flex-col items-start">
        <div className="relative w-full aspect-[4/4] overflow-hidden rounded">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="w-full object-cover"
            sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
            priority={false}
          />
        </div>

        <h3 className="mt-4 text-xl font-bold leading-tight text-slate-900">
          {member.name}
        </h3>
        <p className="text-brand-teal font-medium">{member.role}</p>

        {member.bio && member.bio.length > 0 && (
          <div className="rich-text mt-3 space-y-3 text-sm leading-relaxed text-slate-600">
            <PortableText value={member.bio} />
          </div>
        )}

        {member.qualifications?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {member.qualifications.map((b) => (
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
