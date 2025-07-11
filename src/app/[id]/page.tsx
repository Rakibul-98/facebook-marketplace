"use client";

import { notFound } from "next/navigation";
import { getProductById } from "../components/Products";
import Image from "next/image";
import productImg from "../../../public/product.jpg";
import Header from "../components/Header";
import { useState } from "react";

type Props = {
  params: { id: string };
};

export default function ProductDetailPage({ params }: Props) {
  const product = getProductById(Number(params.id));

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  if (!product) return notFound();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Submitted Message:", {
      email,
      message,
      productId: product.id,
      productDetails: product, // ✅ Log full product object
    });

    setSent(true);
  };

  return (
    <div className="h-screen">
      <Header />
      <div className="p-4 flex flex-col md:flex-row gap-5">
        {/* Product Image */}
        <div className="flex-1">
          <Image
            src={productImg}
            alt="dummy product"
            className="w-full h-[60vh] lg:h-[85vh] object-cover"
          />
        </div>

        {/* Details */}
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
              Wei Gu
            </p>
          </div>
          <h3 className="text-xl font-semibold">Message Seller</h3>
          {/* Message Form or Confirmation */}
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
                  placeholder="I want to buy your bike!"
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
