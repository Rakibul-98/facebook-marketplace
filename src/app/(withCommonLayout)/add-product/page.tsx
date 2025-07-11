"use client";

import { useState } from "react";
import Image from "next/image";
import { FaCloudUploadAlt } from "react-icons/fa";

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

export default function CreateListing() {
  const [form, setForm] = useState<{
    title: string;
    category: string;
    price: string;
    location: string;
    email: string;
    description: string;
    image: File | null;
  }>({
    title: "",
    category: categories[0],
    price: "",
    location: "",
    email: "",
    description: "",
    image: null,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForm((prev) => ({ ...prev, image: file }));
  };

  const imageUrl = form.image ? URL.createObjectURL(form.image) : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Form:", form);
  };

  const isFormValid =
    form.title.trim() !== "" &&
    form.price.trim() !== "" &&
    form.email.trim() !== "" &&
    form.image !== null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mx-5 p-6 ">
      {/* Form Section */}
      <form onSubmit={handleSubmit}>
        <h3 className="text-2xl font-semibold mb-3">Add Listing Details</h3>
        <div className="mb-3">
          {/* Custom Upload Box */}
          <label
            htmlFor="imageUpload"
            className="flex items-center justify-center relative w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition"
          >
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="Preview"
                fill
                className="object-cover w-full h-full rounded-lg"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-gray-400">
                <FaCloudUploadAlt size={40} />
                <p className="mt-2 text-sm">Click to upload</p>
              </div>
            )}

            {/* Hidden input */}
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="block font-semibold">Title *</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-3">
          <label className="block font-semibold">Category *</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-1/2 border border-gray-300 p-2 rounded"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="block font-semibold">Price *</label>
          <input
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-3">
          <label className="block font-semibold">Location</label>
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-3">
          <label className="block font-semibold">Contact Email *</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-3">
          <label className="block font-semibold">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <button
          disabled={!isFormValid}
          type="submit"
          className={`w-full px-4 py-2 rounded transition
    ${
      isFormValid
        ? "bg-blue-600 text-white hover:bg-blue-700"
        : "bg-gray-300 text-gray-500 cursor-not-allowed"
    }
  `}
        >
          Create Listing
        </button>
      </form>

      {/* Preview Section */}
      <div className="border border-gray-300 rounded p-4 self-start">
        <div className="relative w-full h-96 mb-3 rounded overflow-hidden ">
          <Image
            src={imageUrl || ""}
            alt="Preview"
            fill
            className="object-cover rounded bg-gray-100 "
            unoptimized // only needed for local previews
          />
        </div>
        <h2 className="text-xl font-bold">{form.title || "Bike for sale"}</h2>
        <p className="text-lg text-gray-700">${form.price || "0"}</p>
        <p className="text-sm text-gray-500">
          Listed just now
          <br />
          in {form.location || "Palo Alto, CA"}
        </p>
        <p className="text-sm text-gray-500 mt-2">Category: {form.category}</p>
        <div className="mt-4">
          <h3 className="font-semibold">Description</h3>
          <p>{form.description || "No description provided."}</p>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Seller Information</h3>
          <p>{form.email}</p>
        </div>
      </div>
    </div>
  );
}
