type Product = {
  id: number;
  title: string;
  price: number;
  location: string;
};

const dummyProducts: Product[] = Array.from({ length: 15 }).map((_, i) => ({
  id: i + 1,
  title: "Lorem ipsum dolor sit",
  price: 2300,
  location: "Palo Alto, CA",
}));

export default function Products() {
  return (
    <div className="flex-1 px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">Electronics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {dummyProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-md p-2 shadow-sm hover:shadow-md transition"
          >
            <div className="h-32 bg-blue-100 rounded mb-2"></div>
            <div className="text-lg font-semibold">${product.price}</div>
            <div className="text-sm">{product.title}</div>
            <div className="text-xs text-gray-500">{product.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
