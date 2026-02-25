import React, { useState, useEffect } from "react";
import { navigate, Script } from "gatsby";
import Layout from "../components/layout";
import CartQtySelector from "../components/CartQtySelector";
import { KlumpCheckout } from "klump-react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  type?: string;
  capacity?: string;
  wattage?: string;
  battery_type?: string;
  voltage?: string;
  warranty?: string;
  [key: string]: any;
}

interface OrderFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  location: string;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    location: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [paymentType, setPaymentType] = useState<
    "pay now" | "pay small small" | null
  >(null);

  // useEffect(() => {
  //   // Force refresh on navigation
  //   if (typeof window !== "undefined") {
  //     window.location.reload();
  //   }
  // }, []);

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCartItems(Array.isArray(parsedCart) ? parsedCart : []);
      } catch (err) {
        console.error("Error parsing cart data:", err);
        setCartItems([]);
      }
    }
  }, []);

  // Trigger cart update event when cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cartItems]);

  const calculateCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item,
    );
    setCartItems(updatedCart);
  };

  const removeFromCart = (itemId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    const { name, email, phone, address, location } = formData;

    if (!name.trim()) {
      setError("Please enter your full name");
      return false;
    }

    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address");
      return false;
    }

    if (!phone.trim()) {
      setError("Please enter your phone number");
      return false;
    }

    if (!address.trim()) {
      setError("Please enter your address");
      return false;
    }

    if (!location.trim()) {
      setError("Please enter your location/state");
      return false;
    }

    return true;
  };

  const submitKlumpOrder = async (klumpResponse: any) => {
    try {
      const formattedCartItems = cartItems.map((item, index) => ({
        id: item.id,
        name: item.name || `Item ${item.id}`,
        price: Number(item.price) || 0,
        quantity: Number(item.quantity) || 1,
        total_item_price:
          (Number(item.price) || 0) * (Number(item.quantity) || 1),
        ...(item.wattage && { wattage: item.wattage }),
        ...(item.type && { type: item.type }),
        ...(item.battery_type && { battery_type: item.battery_type }),
        ...(item.capacity && { capacity: item.capacity }),
        ...(item.voltage && { voltage: item.voltage }),
        ...(item.warranty && { warranty: item.warranty }),
        cart_index: index,
      }));

      const orderData = {
        email: formData.email.toLowerCase(),
        phone: formData.phone.replace(/\D/g, ""),
        name: formData.name,
        address: formData.address,
        location: formData.location,
        items: formattedCartItems,
        total_price: Math.round(calculateCartTotal() * 1.06),
        paymentStatus: "successful",
        paymentType: "pay small small",
        klumpReference: klumpResponse.reference,
        order_summary: {
          item_count: cartItems.length,
          total_quantity: cartItems.reduce(
            (sum, item) => sum + item.quantity,
            0,
          ),
        },
      };

      const response = await fetch(
        "https://3tqny22gvd.execute-api.us-east-1.amazonaws.com/production/api/orders",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(orderData),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to submit order");
      }
    } catch (err) {
      console.error("Error submitting Klump order:", err);
      setError("Network error. Please check your connection and try again.");
    }
  };

  // const [klumpLoaded, setKlumpLoaded] = useState(false);

  // useEffect(() => {
  //   const element = document.getElementById("klump__checkout");
  //   if (element) {
  //     const handleClick = () => {
  //       console.log("Klump button clicked");
  //       if (!validateForm()) return;
  //       if (cartItems.length === 0) {
  //         setError("Your cart is empty");
  //         return;
  //       }

  //       setLoading(true);
  //       setPaymentType("pay small small");
  //       setError("");

  //       const payload = {
  //         publicKey:
  //           "klp_pk_8735e345455c45ac9601978954790ccf478622210b574adc8b54d1263e5fc0b0",
  //         data: {
  //           amount: Math.round(calculateCartTotal() * 1.06),
  //           shipping_fee: 0,
  //           currency: "NGN",
  //           first_name: formData.name.split(" ")[0] || "Customer",
  //           last_name: formData.name.split(" ").slice(1).join(" ") || "User",
  //           email: formData.email,
  //           phone: formData.phone,
  //           redirect_url: `${window.location.origin}/payment/small-success`,
  //           merchant_reference: `order-${Date.now()}`,
  //           meta_data: {
  //             customer: formData.name,
  //             email: formData.email,
  //           },
  //           items: cartItems.map((item) => ({
  //             name: item.name,
  //             unit_price: Math.round(item.price * 1.06),
  //             quantity: item.quantity,
  //           })),
  //         },
  //         onSuccess: async (data: any) => {
  //           // console.log("Klump payment successful:", data);

  //           // Verify payment with Klump
  //           try {
  //             const verifyResponse = await fetch(
  //               "https://ctcmoq233d.execute-api.us-east-1.amazonaws.com/production/api/verify-klump-payment",
  //               {
  //                 method: "POST",
  //                 headers: { "Content-Type": "application/json" },
  //                 credentials: "include",
  //                 body: JSON.stringify({ reference: data.reference }),
  //               }
  //             );
  //             await submitKlumpOrder(data);
  //             clearCart();
  //             navigate("/payment/small-success");
  //             if (verifyResponse.ok) {
  //               const verificationResult = await verifyResponse.json();
  //               if (verificationResult.status === "success") {
  //                 // await submitKlumpOrder(data);
  //                 // clearCart();
  //                 // navigate("/payment/small-success");
  //               } else {
  //                 setError(
  //                   "Payment verification failed. Please contact support."
  //                 );
  //               }
  //             } else {
  //               setError(
  //                 "Payment verification failed. Please contact support."
  //               );
  //             }
  //           } catch (error) {
  //             console.error("Payment verification error:", error);
  //             setError("Payment verification failed. Please contact support.");
  //           }

  //           setLoading(false);
  //           setPaymentType(null);
  //         },
  //         onError: (data: any) => {
  //           console.log("Klump payment error:", data);
  //           setError("Payment failed. Please try again.");
  //           setLoading(false);
  //           setPaymentType(null);
  //         },
  //         onLoad: (data: any) => {
  //           console.log("Klump loaded:", data);
  //         },
  //         onOpen: (data: any) => {
  //           console.log("Klump opened:", data);
  //         },
  //         onClose: (data: any) => {
  //           console.log("Klump closed:", data);
  //           setLoading(false);
  //           setPaymentType(null);
  //         },
  //       };

  //       console.log("Creating Klump instance with payload:", payload);
  //       // @ts-ignore
  //       const klump = new Klump(payload);
  //     };

  //     element.addEventListener("click", handleClick);
  //     return () => element.removeEventListener("click", handleClick);
  //   }
  // }, [cartItems, formData]);

  // useEffect(() => {
  //   if (paymentType === "pay small small") {
  //     initiateKlumpPayment();
  //     return;
  //   }
  // }, [paymentType]);

  const payWithKlump = () => {
    const payload = {
      publicKey:
        "klp_pk_8735e345455c45ac9601978954790ccf478622210b574adc8b54d1263e5fc0b0",
      data: {
        amount: Math.round(calculateCartTotal() * 1.06),
        shipping_fee: 0,
        currency: "NGN",
        first_name: formData.name.split(" ")[0] || "Customer",
        last_name: formData.name.split(" ").slice(1).join(" ") || "User",
        email: formData.email,
        phone: formData.phone,
        redirect_url: `${window.location.origin}/payment/small-success`,
        merchant_reference: `order-${Date.now()}`,
        meta_data: {
          customer: formData.name,
          email: formData.email,
        },
        items: [
          ...cartItems.map((item) => ({
            name: item.name,
            unit_price: Math.round(item.price * 1.06),
            quantity: item.quantity,
          })),
        ],
      },
      onSuccess: async (data: any) => {
        console.log("Klump payment successful:", data);

        try {
          const verifyResponse = await fetch(
            "https://3tqny22gvd.execute-api.us-east-1.amazonaws.com/production/api/verify-klump-payment",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify({ reference: data.reference }),
            },
          );
          await submitKlumpOrder(data);
          clearCart();
          navigate("/payment/small-success");
          if (verifyResponse.ok) {
            const verificationResult = await verifyResponse.json();
            if (verificationResult.status === "success") {
              // await submitKlumpOrder(data);
              // clearCart();
              // navigate("/payment/small-success");
            } else {
              setError("Payment verification failed. Please contact support.");
            }
          } else {
            setError("Payment verification failed. Please contact support.");
          }
        } catch (error) {
          console.error("Payment verification error:", error);
          setError("Payment verification failed. Please contact support.");
        }

        setLoading(false);
        setPaymentType(null);
      },
      onError: (data: any) => {
        console.log("Klump payment error:", data);
        setError("Payment failed. Please try again.");
        setLoading(false);
        setPaymentType(null);
      },
      onLoad: (data: any) => {
        console.log("Klump loaded:", data);
      },
      onOpen: (data: any) => {
        console.log("Klump opened:", data);
      },
      onClose: (data: any) => {
        console.log("Klump closed:", data);
        setLoading(false);
        setPaymentType(null);
      },
    };

    console.log("Creating Klump instance with payload:", payload);
    // @ts-ignore
    const klump = new Klump(payload);
    // klump.open();
  };

  const submitOrder = async (paymentMethod: "pay now" | "pay small small") => {
    if (paymentMethod === "pay small small") {
      return;
    }

    if (!validateForm()) return;

    if (cartItems.length === 0) {
      setError("Your cart is empty");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");
    setPaymentType(paymentMethod);

    try {
      // Prepare cart items with consistent structure for database
      const formattedCartItems = cartItems.map((item, index) => ({
        id: item.id,
        name: item.name || `Item ${item.id}`,
        price: Number(item.price) || 0,
        quantity: Number(item.quantity) || 1,
        total_item_price:
          (Number(item.price) || 0) * (Number(item.quantity) || 1),
        // Include additional product details if available
        ...(item.wattage && { wattage: item.wattage }),
        ...(item.type && { type: item.type }),
        ...(item.battery_type && { battery_type: item.battery_type }),
        ...(item.capacity && { capacity: item.capacity }),
        ...(item.voltage && { voltage: item.voltage }),
        ...(item.warranty && { warranty: item.warranty }),
        cart_index: index, // For tracking purposes
      }));

      const orderData = {
        email: formData.email.toLowerCase(),
        phone: formData.phone.replace(/\D/g, ""),
        name: formData.name,
        address: formData.address,
        location: formData.location,
        items: formattedCartItems,
        total_price: calculateCartTotal(),
        paymentStatus: "pending",
        paymentType: paymentMethod,
        order_summary: {
          item_count: cartItems.length,
          total_quantity: cartItems.reduce(
            (sum, item) => sum + item.quantity,
            0,
          ),
        },
      };

      const response = await fetch(
        "https://3tqny22gvd.execute-api.us-east-1.amazonaws.com/production/api/orders",
        // "https://05ce85v1dg.execute-api.us-east-1.amazonaws.com/dev/api/orders",
        // "https://antonaxel-server.onrender.com/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(orderData),
        },
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message ||
            `HTTP ${response.status}: Failed to create order`,
        );
      }

      const result = await response.json();

      if (paymentMethod === "pay now") {
        // Redirect to Paystack payment
        await initiatePaystackPayment(
          result.orderId || result.id,
          calculateCartTotal(),
        );
      }
    } catch (err) {
      console.error("Error submitting order:", err);
      const errorMessage =
        err instanceof TypeError && err.message.includes("fetch")
          ? "Unable to connect to server. Please check your internet connection."
          : err instanceof Error
            ? err.message
            : "Failed to submit order. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
      setPaymentType(null);
    }
  };

  //   console.log(`${window.location.origin}/payment/callback`);

  const initiatePaystackPayment = async (orderId: string, amount: number) => {
    try {
      // Initialize Paystack payment
      const paystackResponse = await fetch(
        // "http://localhost:5000/api/initialize-payment",
        "https://3tqny22gvd.execute-api.us-east-1.amazonaws.com/production/api/initialize-payment",
        // "https://antonaxel-server.onrender.com/api/initialize-payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            orderId,
            email: formData.email.toLowerCase(),
            amount: amount * 100, // Paystack expects amount in kobo
            callback_url: `${window.location.origin}/payment/callback`,
            metadata: {
              orderId,
              customerName: formData.name,
              customerPhone: formData.phone,
            },
          }),
        },
      );

      if (!paystackResponse.ok) {
        throw new Error("Failed to initialize payment");
      }

      const paymentData = await paystackResponse.json();

      if (paymentData.authorization_url) {
        // Clear cart before redirecting
        clearCart();
        // Redirect to Paystack payment page
        window.location.href = paymentData.authorization_url;
      } else {
        throw new Error("Payment initialization failed");
      }
    } catch (err) {
      console.error("Error initializing payment:", err);
      setError("Failed to initialize payment. Please try again.");
    }
  };

  // Auto-hide error messages
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  if (cartItems.length === 0) {
    return (
      <Layout pageTitle="Shopping Cart">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🛒</div>
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">
              Add some products to your cart to get started.
            </p>
            <button
              onClick={() => navigate("/products")}
              className="btn btn-primary"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout pageTitle="Shopping Cart">
      <div className=" mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        {/* Error Alert */}
        {error && (
          <div className="alert alert-error mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {/* Success Alert */}
        {success && (
          <div className="alert alert-success mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{success}</span>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title mb-4">
                  Cart Items ({cartItems.length})
                </h2>

                <div className="space-y-4 overflow-auto">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <div className="text-sm text-gray-600 space-y-1">
                          {item.type && <p>Type: {item.type}</p>}
                          {item.capacity && <p>Capacity: {item.capacity}</p>}
                          {item.wattage && <p>Wattage: {item.wattage}</p>}
                          {item.battery_type && (
                            <p>Battery: {item.battery_type}</p>
                          )}
                          {item.voltage && <p>Voltage: {item.voltage}</p>}
                        </div>
                        <p className="font-semibold text-lg">
                          ₦{item.price.toLocaleString()}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 max-md:flex-col">
                        <CartQtySelector
                          quantity={item.quantity}
                          onQuantityChange={(newQuantity) =>
                            updateQuantity(item.id, newQuantity)
                          }
                        />

                        <div className="text-right">
                          <p className="font-semibold">
                            ₦{(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="btn btn-sm btn-error btn-outline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="divider"></div>

                <div className="flex justify-between items-center">
                  <button
                    onClick={clearCart}
                    className="btn btn-outline btn-error"
                  >
                    Clear Cart
                  </button>
                  <div className="text-right">
                    <p className="text-2xl font-bold">
                      Total: ₦{calculateCartTotal().toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-1">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title mb-4">Checkout Information</h2>
                <form className="space-y-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Full Name *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      className="input input-bordered w-full"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email Address *</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      className="input input-bordered w-full"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter phone number"
                      className="input input-bordered w-full"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Address *</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Enter your address"
                      className="input input-bordered w-full"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Location/State *</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="Enter location or state"
                      className="input input-bordered w-full"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </form>
                <div className="divider"></div>
                {/* Payment Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => submitOrder("pay now")}
                    disabled={loading}
                    className="btn btn-primary w-full"
                  >
                    {loading && paymentType === "pay now" ? (
                      <>
                        <span className="loading loading-spinner loading-sm"></span>
                        Processing...
                      </>
                    ) : (
                      <>
                        💳 Pay Now
                        <span className="text-sm opacity-75">
                          (₦{calculateCartTotal().toLocaleString()})
                        </span>
                      </>
                    )}
                  </button>
                </div>
                {/* @ts-ignore */}
                <KlumpCheckout onClick={payWithKlump} />
                {/* <div id="klump__checkout"></div> */}
                <div className="text-xs text-gray-500 mt-4">
                  <p>
                    <strong>Pay Now:</strong> Complete payment immediately via
                    Paystack
                  </p>
                  <p>
                    <strong>Pay Small Small:</strong> Flexible installment
                    payment via Klump
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;

declare global {
  interface Window {
    Klump: any;
  }
}

export const Head = () => (
  <>
    <title>Shopping Cart | AntonAxel Solar Products</title>
    <meta
      name="description"
      content="Review your selected solar products and complete your order. Secure checkout with flexible payment options including Pay Now and Pay Small Small installments."
    />
    <meta
      name="keywords"
      content="shopping cart, solar products checkout, order review, payment options, AntonAxel cart"
    />
    <meta name="author" content="AntonAxel Nigeria Company Limited" />
    <meta
      property="og:title"
      content="Shopping Cart | AntonAxel Solar Products"
    />
    <meta
      property="og:description"
      content="Review your selected solar products and complete your order with flexible payment options."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://antonaxel.com/cart" />
    <meta name="twitter:card" content="summary" />
    <meta
      name="twitter:title"
      content="Shopping Cart | AntonAxel Solar Products"
    />
    <meta
      name="twitter:description"
      content="Review your selected solar products and complete your order with flexible payment options."
    />
    <link rel="canonical" href="https://antonaxel.com/cart" />
    <meta name="robots" content="noindex, nofollow" />
  </>
);
