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
    <div className="flex mx-auto">
      <SideMenu selected="" onSelect={() => {}} />
      <div className="flex-1 px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center border rounded-md p-2 shadow-sm hover:shadow-md transition cursor-pointer h-fit"
          >
            <Link
              href="/add-product"
              className="w-full h-full flex flex-col items-center"
            >
              <div className="flex justify-center items-center h-20 w-20 bg-blue-100 rounded-full mb-2">
                <div className="flex justify-center items-center h-12 w-12 bg-blue-200 rounded-full"></div>
              </div>
              <div className="text-sm">{item}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
