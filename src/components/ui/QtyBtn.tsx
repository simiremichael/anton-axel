import React, { useEffect, useState } from "react";

export default function QtyBtn() {
  const [qty, setQty] = useState(1);

  const inc = () => {
    setQty((prev: number) => {
      return prev + 1;
    });
  };
  const dec = () => {
    setQty((prev: number) => {
      return prev - 1;
    });
  };

  return (
    <>
      <div className="ml-2 border-gray-500 border rounded-lg flex items-center max-md:flex-col">
        <button className="btn btn-sm btn-error" onClick={dec}>
          -
        </button>
        <span style={{ fontSize: "12px" }} className="px-2">
          {qty}
        </span>
        <button className="btn btn-sm btn-accent" onClick={inc}>
          +
        </button>
      </div>
    </>
  );
}
