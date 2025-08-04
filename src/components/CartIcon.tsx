import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";

interface CartItem {
  id: number;
  quantity: number;
}

const CartIcon = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        try {
          const parsedCart: CartItem[] = JSON.parse(savedCart);
          const count = parsedCart.reduce(
            (total, item) => total + item.quantity,
            0
          );
          setCartCount(count);
        } catch (err) {
          console.error("Error parsing cart data:", err);
          setCartCount(0);
        }
      } else {
        setCartCount(0);
      }
    };

    // Update cart count on component mount
    updateCartCount();

    // Listen for storage changes (when cart is updated in other tabs/components)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "cart") {
        updateCartCount();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Custom event listener for same-tab cart updates
    const handleCartUpdate = () => {
      updateCartCount();
    };

    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  return (
    <button
      onClick={() => navigate("/cart")}
      className="btn btn-ghost btn-circle relative"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"
        />
      </svg>
      {cartCount > 0 && (
        <span className="badge badge-sm badge-primary absolute -top-2 -right-2">
          {cartCount}
        </span>
      )}
    </button>
  );
};

export default CartIcon;
