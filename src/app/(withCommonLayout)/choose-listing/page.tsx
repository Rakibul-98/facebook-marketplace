"use client";

import Link from "next/link";
import React from "react";
import SideMenu from "../../components/SideMenu";

export default function page() {
  const items = [
    "Items for sale",
    "Create multiple listings",
    "Vehicle for sale",
    "Home for sale or rent",
  ];

  return (
    <div className="flex items-start">
      <SideMenu selected="" onSelect={() => {}} />

      <div className="flex-1 px-4 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items.map((item, i) => (
          <Link
            key={i}
            href="/add-product"
            className="flex flex-col items-center rounded-md p-4 shadow-sm hover:shadow-md transition cursor-pointer h-full bg-white"
          >
            <div className="flex justify-center items-center h-20 w-20 bg-blue-100 rounded-full mb-2">
              <div className="flex justify-center items-center h-12 w-12 bg-blue-200 rounded-full" />
            </div>
            <div className="text-sm text-center">{item}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
