import UserNav from "@/components/userNav";
import Link from "next/link";
import { Suspense } from "react";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-2 overflow-x-auto py-2 align-middle text-3xl font-bold">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
        <Suspense fallback={<li>loading...</li>}>
          {/* @ts-expect-error Async Server Component */}
          <UserNav />
        </Suspense>
      </ul>
    </nav>
  );
}

const links = [
  { href: "/", label: "home" },
  { href: "/cache1", label: "cache1" },
  { href: "/cache2", label: "cache2" },
  { href: "/cache3", label: "cache3" },
  { href: "/cache4", label: "cache4" },
  //   { href: "/required", label: "required" },
  //   { href: "/auth", label: "auth" },
  //   { href: "/upload", label: "upload" },
  //   { href: "/todos", label: "todos" },
];
