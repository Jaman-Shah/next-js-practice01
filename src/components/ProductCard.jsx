import Image from "next/image";
import React from "react";

const ProductCard = ({ product }) => {
  const { id, category, product_name, brand, price, image } = product;
  return (
    <div className="border p-4">
      <p>{product_name}</p>
      <p>{brand}</p>
      <p>{price}</p>
      <p>{category}</p>
      <Image src={image} height={200} width={200} alt={product_name} />
      <div className="flex justify-center items-end mt-8 gap-4">
        <button className="border p-2"> See Details</button>
        <button className="border p-2"> Buy Now </button>
      </div>
    </div>
  );
};

export default ProductCard;
