"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type RouteType = {
  path: string;
  label: string;
};
const routes: RouteType[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/blogs", label: "Blogs" },
];

export default function Navbar() {
  let pathname = usePathname();
  if (pathname.includes("/blogs/")) {
    pathname = "/blogs";
  }

  return (
    <aside className="flex items-baseline justify-between px-8 py-4">
      <div className="flex h-16 items-center justify-center">Logo</div>
      <ul className="flex w-max text-base">
        {routes.map((route) => {
          const isSelect = pathname === route.path;
          return (
            <li key={route.label}>
              <Link
                href={route.path}
                className={`${
                  isSelect && "font-bold"
                } px-2 py-1 rounded hover:text-accent`}
              >
                {route.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
