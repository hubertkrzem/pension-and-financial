import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { client } from "@/sanity/client";
import { FOOTER_QUERY } from "@/sanity/queries";

export default async function Footer() {
  const footer = await client.fetch(FOOTER_QUERY);
  const year = new Date().getFullYear();

  const privacyUrl = footer?.privacyPolicy?.asset?.url ?? "documents/privacy-policy.pdf";
  const termsUrl = footer?.termsOfService?.asset?.url ?? "documents/terms-of-business.pdf";

  return (
    <footer className="bg-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
        <div className="grid gap-6 md:grid-cols-2 md:items-start md:gap-8">

          {/* LEFT: Logo and text */}
          <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4">
            <Link href="/" className="shrink-0" aria-label="Go to home">
              <Image
                src="/p&f_logo.png"
                alt="Pension & Financial"
                width={100} height={100}
                className="md:w-[100px] md:h-[100px]"
              />
            </Link>

            {/* Regulatory Disclosures from Sanity */}
            <div className="text-xs sm:text-sm leading-snug text-slate-600">
              {footer?.regulatoryDisclosures && (
                <PortableText value={footer.regulatoryDisclosures as PortableTextBlock[]} />
              )}
              <p>&copy; {year} Pension &amp; Financial. All rights reserved.</p>
            </div>
          </div>

          {/* RIGHT: Document Links */}
          <ul className="flex flex-col items-center md:items-end gap-1.5 text-sm text-slate-600">
            <li>
              <Link href={privacyUrl} className="block py-2 hover:text-blue-700">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href={termsUrl} className="block py-2 hover:text-blue-700">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/legal" className="block py-2 hover:text-blue-700">
                Legal Disclaimers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
