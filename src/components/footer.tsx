// app/components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-white/90">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
        {/* Mobile: stacked; Desktop: two columns */}
        <div className="grid gap-6 md:grid-cols-2 md:items-start md:gap-8">
          
          {/* LEFT: Logo and text */}
          <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4">
            <Link href="/" className="shrink-0" aria-label="Go to home">
              <Image
                src="/p&f_logo.png"
                alt="Pension & Financial"
                width={100} height={100}
                className="md:w-[100px] md:h-[100px]"
                priority
              />
            </Link>

            <div className="text-xs sm:text-sm leading-snug text-slate-600">
              <p>
                John Clare &amp; Associates Ltd, trading as Pension &amp; Financial,
                is regulated by the Central Bank of Ireland.
              </p>
              <p>Central Bank Registered No. CB2468 · Company No. 323124</p>
              <p>Registered Address: 89 Eagle Valley, Enniskerry, Dublin 18</p>
              <p>© {year} Pension &amp; Financial. All rights reserved.</p>
            </div>
          </div>

          {/* RIGHT: Document Links */}
          <ul className="flex flex-col items-center md:items-end gap-1.5 text-sm text-slate-600">
            <li>
              <Link href="documents/privacy-policy.pdf" className="block py-2 hover:text-blue-700">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="documents/terms-of-business.pdf" className="block py-2 hover:text-blue-700">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 hover:text-blue-700">
                Legal Disclaimers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}