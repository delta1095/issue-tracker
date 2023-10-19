import Link from "next/link";

export const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "#" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">Logo</Link>

      <ul className="flex space-x-6">
        {links.map(({ label, href }) => (
          <li className="text-zinc-500 hover:text-zinc-800">
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
