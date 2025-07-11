import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";

export default function Header() {
  return (
    <div className="border-b border-gray-300 px-4 py-3">
      <Link href="/" className="inline-flex gap-2 items-center text-blue-500">
        <span className="text-3xl">
          <FaFacebook />
        </span>
        <span className="font-bold text-xl">Marketplace</span>
      </Link>
    </div>
  );
}
