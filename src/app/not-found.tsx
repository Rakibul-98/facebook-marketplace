"use client";

import Link from "next/link";
import Image from "next/image";
import notFoundImg from "../../public/notFound.svg";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center px-4">
      <div className="w-full max-w-md relative aspect-square mb-6">
        <Image
          src={notFoundImg}
          alt="404 Not Found"
          fill
          className="object-contain"
        />
      </div>

      <h1 className="text-4xl font-bold text-gray-800 mb-2">Page Not Found</h1>
      <p className="text-gray-500 mb-6">
        Sorry, the page you’re looking for doesn’t exist.
      </p>

      <Link
        href="/"
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
