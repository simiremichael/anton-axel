import React from "react";

interface CartQtySelectorProps {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
  minQuantity?: number;
  maxQuantity?: number;
}

export default function CartQtySelector({
  quantity,
  onQuantityChange,
  minQuantity = 1,
  maxQuantity = 10,
}: CartQtySelectorProps) {
  const handleDecrease = () => {
    if (quantity > minQuantity) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < maxQuantity) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= minQuantity && value <= maxQuantity) {
      onQuantityChange(value);
    }
  };

  return (
    <div className="flex items-center gap-2 ml-2">
      <button
        className={`btn btn-sm btn-circle ${
          quantity <= minQuantity
            ? "btn-disabled opacity-50"
            : "btn-outline hover:btn-primary"
        }`}
        onClick={handleDecrease}
        disabled={quantity <= minQuantity}
        type="button"
      >
        −
      </button>

      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        min={minQuantity}
        max={maxQuantity}
        className="input input-sm w-10 p-0 text-center border-gray-300"
      />

      <button
        className={`btn btn-sm btn-circle ${
          quantity >= maxQuantity
            ? "btn-disabled opacity-50"
            : "btn-outline hover:btn-primary"
        }`}
        onClick={handleIncrease}
        disabled={quantity >= maxQuantity}
        type="button"
      >
        +
      </button>
    </div>
  );
}
