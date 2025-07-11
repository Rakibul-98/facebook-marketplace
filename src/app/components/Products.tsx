"use client";

import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface Product {
  id: number;
  title: string;
  price: number;
  location: string;
  category: string;
}

const dummyProducts: Product[] = [
  {
    id: 1,
    title: "Used Laptop",
    price: 500,
    location: "Palo Alto, CA",
    category: "Electronics",
  },
  {
    id: 2,
    title: "iPhone 14 Pro",
    price: 1000,
    location: "San Jose, CA",
    category: "Electronics",
  },
  {
    id: 3,
    title: "Mountain Bike",
    price: 300,
    location: "Sunnyvale, CA",
    category: "Sporting Goods",
  },
  {
    id: 4,
    title: "Guitar",
    price: 250,
    location: "Palo Alto, CA",
    category: "Musical Instruments",
  },
  {
    id: 5,
    title: "Sofa Set",
    price: 700,
    location: "Fremont, CA",
    category: "Home Goods",
  },
  {
    id: 6,
    title: "Running Shoes",
    price: 120,
    location: "San Mateo, CA",
    category: "Apparel",
  },
];

export const getProductsByCategory = (category: string) =>
  dummyProducts.filter((p) => p.category === category);

export const getProductById = (id: number) =>
  dummyProducts.find((p) => p.id === id);

export default function ProductGrid({ category }: { category: string }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = getProductsByCategory(category).filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 px-4 py-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold">{category}</h2>

        <div className="relative">
          <span className="absolute top-2 left-2">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded px-3 ps-7.5 py-1 w-full sm:w-68 focus:outline-none focus:border-black"
          />
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/${product.id}`}>
              <div className="border rounded-md p-2 shadow-sm hover:shadow-md transition cursor-pointer">
                <div className="h-32 bg-blue-100 rounded mb-2"></div>
                <div className="text-lg font-semibold">${product.price}</div>
                <div className="text-sm">{product.title}</div>
                <div className="text-xs text-gray-500">{product.location}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
