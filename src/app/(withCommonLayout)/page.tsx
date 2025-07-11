"use client";

import { useState } from "react";
import Products from "../components/Products";
import SideMenu from "../components/SideMenu";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Electronics");

  return (
    <div>
      <main className="min-h-screen flex mx-auto">
        <SideMenu selected={selectedCategory} onSelect={setSelectedCategory} />
        <Products category={selectedCategory} />
      </main>
    </div>
  );
}
