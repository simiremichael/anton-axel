import { useState } from "react";

export const UseQtyState = () => {
  const [qty, setQty] = useState(1);

  return {
    qty,
    setQty,
  };
};