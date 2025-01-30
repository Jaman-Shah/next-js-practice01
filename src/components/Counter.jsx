"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button className="border p-4" onClick={() => setCount(count + 1)}>
        Inc
      </button>
      {count}
    </div>
  );
};

export default Counter;
