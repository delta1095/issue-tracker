"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const currentPath = usePathname();

  console.log(currentPath);
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">Logo</Link>

      <ul className="flex space-x-6">
        {links.map(({ label, href }) => (
          <li
            className={`text-zinc-${
              href === currentPath ? "900" : "500"
            } hover:text-zinc-800`}
          >
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
