"use client";

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

export default function SideMenu() {
  return (
    <aside className="px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul className="space-y-1">
        {categories.map((cat) => (
          <li
            key={cat}
            className={`cursor-pointer px-2 py-1 rounded hover:bg-blue-100 ${
              cat === "Electronics"
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
