"use client";

import Link from "next/link";
import { GoTag } from "react-icons/go";

interface SideMenuProps {
  selected: string;
  onSelect: (category: string) => void;
}

const categories = [
  "Vehicles",
  "Property Rentals",
  "Apparel",
  "Classifieds",
  "Electronics",
  "Entertainment",
  "Family",
  "Free Stuff",
  "Garden & Outdoor",
  "Hobbies",
  "Home Goods",
  "Home Improvement",
  "Home Sales",
  "Musical Instruments",
  "Office Supplies",
  "Pet Supplies",
  "Sporting Goods",
  "Toys & Games",
  "Buy and sell groups",
];

export default function SideMenu({ selected, onSelect }: SideMenuProps) {
  return (
    <aside className="px-4 py-6 bg-gray-100">
      <h2 className="text-xl font-bold mb-2">Create new listing</h2>
      <Link
        href="/choose-listing"
        className="flex gap3 items-center hover:bg-blue-100"
      >
        <span className="ps-2">
          <GoTag />
        </span>
        <span className={`cursor-pointer px-2 py-1 `}>Choose listing type</span>
      </Link>
      <h2 className="text-xl font-bold my-4">Categories</h2>
      <ul className="space-y-1">
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => onSelect(cat)}
            className={`cursor-pointer px-2 py-1 rounded hover:bg-blue-100 ${
              selected === cat
                ? "bg-blue-100 border-l-4 border-blue-600 font-semibold"
                : ""
            }`}
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
}
