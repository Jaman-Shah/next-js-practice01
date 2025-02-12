import ProductCard from "@/components/ProductCard";
import React from "react";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    next: {
      revalidate: 5,
    },
  });
  const products = await res.json();

  return (
    <div>
      <div>
        <h1>Fetching, Cashing, Revalidating</h1>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default HomePage;
