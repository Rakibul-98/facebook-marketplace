"use client";

import { use, useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "../components/Header";
import { supabase } from "../../../lib/supabaseClient";
import { toast } from "sonner";

type Props = {
  params: Promise<{ id: string }>;
};

interface Product {
  id: number;
  title: string;
  price: number;
  location: string;
  category: string;
  email: string;
  description?: string;
  image_url?: string;
}

export default function ProductDetailPage({ params }: Props) {
  const { id } = use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from("listings")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching product:", error.message);
      } else {
        setProduct(data);
      }

      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from("messages").insert([
      {
        product_id: product?.id,
        email,
        message,
      },
    ]);

    if (error) {
      console.error("Error sending message:", error.message);
      toast.error("Failed to send message.");
    } else {
      toast.success("Message sent to the seller!");
      setSent(true);
      setEmail("");
      setMessage("");
    }
  };

  if (loading) {
    return <p className="p-10 text-gray-600">Loading...</p>;
  }

  if (!product) return notFound();

  return (
    <div className="h-screen">
      <Header />
      <div className="p-4 flex flex-col md:flex-row gap-5">
        <div className="flex-1">
          <div className="relative w-full h-[60vh] lg:h-[85vh] rounded overflow-hidden bg-gray-200">
            {product.image_url ? (
              <Image
                src={product.image_url}
                alt={product.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                No Image
              </div>
            )}
          </div>
        </div>

        <div className="w-full md:w-96 space-y-4 pb-5">
          <div>
            <h1 className="text-xl font-bold">{product.title}</h1>
            <p className="text-lg font-semibold text-gray-800">
              ${product.price}
            </p>
          </div>

          <div className="text-sm text-gray-600">
            <p className="mb-2">
              Listed 1 hour ago <br />
              in <strong>{product.location}</strong>
            </p>
            <p>
              <span className="font-semibold">Seller Information</span>
              <br />
              {product.email}
            </p>
          </div>

          {product.description && (
            <div>
              <h3 className="font-semibold">Description</h3>
              <p className="text-sm text-gray-700">{product.description}</p>
            </div>
          )}

          <h3 className="text-xl font-semibold">Message Seller</h3>

          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Send seller a message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="I want to buy your product!"
                  className="w-full border rounded-md p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-700 transition"
                >
                  Send
                </button>
              </div>
            </form>
          ) : (
            <div className="p-4 border border-green-500 bg-green-50 rounded-md text-sm text-green-700">
              Message sent successfully. The seller will receive an email
              notification.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
