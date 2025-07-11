import React from "react";
import { FaFacebook } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex gap-2 items-center text-blue-500 p-3 border-b border-gray-300">
      <span className="text-3xl">
        <FaFacebook />
      </span>
      <span className="font-bold text-xl">Marketplace</span>
    </div>
  );
}
