import React from "react";

const DynamicProductPage = async ({ params, searchParams }) => {
  const productId = await params.productId;
  const { category, price } = searchParams;

  return (
    <div>
      this is dynamic product page {productId}
      <h1>Search Params: {category}</h1>
      <h1>Search Params: {price}</h1>
    </div>
  );
};

export default DynamicProductPage;
