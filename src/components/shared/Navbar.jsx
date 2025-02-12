"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  const activeLink = (path) => {
    return path === pathname
      ? "bg-green-500 text-white px-4 py-2 rounded"
      : "px-4 py-2";
  };

  const links = [
    { name: "Home", route: "/" },
    { name: "Counter", route: "/counter" },
    { name: "Products", route: "/products" },
    { name: "Dashboard", route: "/dashboard" },
    { name: "Gallery", route: "/gallery" },
  ];

  return (
    <nav className="flex justify-center gap-4 border p-3 bg-blue-500 text-white shadow-md">
      {links.map((link) => (
        <Link
          key={link.route}
          href={link.route}
          className={activeLink(link.route)}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
