import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-8 border p-2 bg-blue-500">
      <Link href="/">Home</Link>
      <Link href="counter">Counter</Link>
      <Link href="products">Products</Link>
      {/* <a href="products/product">Single Product</a> */}
    </div>
  );
};

export default Navbar;
