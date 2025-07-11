"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import { supabase } from "../../../lib/supabaseClient";
import emptyImg from "../../../public/empty.svg";

interface Product {
  id: number;
  title: string;
  price: number;
  location: string;
  category: string;
  image_url?: string;
}

export default function ProductGrid({ category }: { category: string }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("listings")
        .select("*")
        .eq("category", category);

      if (error) {
        console.error("Supabase fetch error:", error.message);
      } else {
        setProducts(data || []);
      }

      setLoading(false);
    };

    fetchProducts();
  }, [category]);

  const filteredProducts = products.filter((product) =>
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

      {loading ? (
        <p className="text-gray-500 text-center text-2xl font-semibold">
          Loading...
        </p>
      ) : filteredProducts.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[70vh]">
          <p>No products found...</p>
          <div className="relative w-full max-w-md aspect-square">
            <Image src={emptyImg} alt="empty" fill className="object-contain" />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/${product.id}`}>
              <div className="border rounded-md p-2 shadow-sm hover:shadow-md transition cursor-pointer">
                <div className="relative h-32 bg-blue-100 rounded mb-2">
                  {product.image_url ? (
                    <Image
                      src={product.image_url}
                      alt={product.title}
                      fill
                      className="object-cover rounded"
                      unoptimized // remove if using optimized domains
                    />
                  ) : null}
                </div>
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
