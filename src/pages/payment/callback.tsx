import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";
import Layout from "../../components/layout";

const PaymentCallback = () => {
  const [status, setStatus] = useState<"loading" | "success" | "failed">(
    "loading"
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        // Get payment reference from URL
        const urlParams = new URLSearchParams(window.location.search);
        const reference = urlParams.get("reference");

        if (!reference) {
          setStatus("failed");
          setMessage("Payment reference not found");
          return;
        }

        // Verify payment with backend
        const response = await fetch(
          //   "http://localhost:5000/api/verify-payment",
          "https://3tqny22gvd.execute-api.us-east-1.amazonaws.com/production/api/verify-payment",
          //  "https://antonaxel-server.onrender.com/api/verify-payment",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ reference }),
          }
        );

        const result = await response.json();

        if (response.ok && result.status === "success") {
          setStatus("success");
          setMessage("Payment successful! Your order has been confirmed.");

          // Redirect to success page after 3 seconds
          setTimeout(() => {
            navigate("/payment/success");
          }, 3000);
        } else {
          setStatus("failed");
          setMessage(result.message || "Payment verification failed");
        }
      } catch (error) {
        console.error("Payment verification error:", error);
        setStatus("failed");
        setMessage("An error occurred while verifying your payment");
      }
    };

    verifyPayment();
  }, []);

  return (
    <Layout pageTitle="Payment Verification">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              {status === "loading" && (
                <>
                  <span className="loading loading-spinner loading-lg"></span>
                  <h2 className="card-title justify-center mt-4">
                    Verifying Payment
                  </h2>
                  <p>Please wait while we verify your payment...</p>
                </>
              )}

              {status === "success" && (
                <>
                  <div className="text-6xl mb-4">✅</div>
                  <h2 className="card-title justify-center text-success">
                    Payment Successful!
                  </h2>
                  <p>{message}</p>
                  <p className="text-sm text-gray-500 mt-4">
                    Redirecting to confirmation page...
                  </p>
                </>
              )}

              {status === "failed" && (
                <>
                  <div className="text-6xl mb-4">❌</div>
                  <h2 className="card-title justify-center text-error">
                    Payment Failed
                  </h2>
                  <p>{message}</p>
                  <div className="card-actions justify-center mt-4">
                    <button
                      onClick={() => navigate("/cart")}
                      className="btn btn-primary"
                    >
                      Try Again
                    </button>
                    <button
                      onClick={() => navigate("/products")}
                      className="btn btn-outline"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentCallback;

export const Head = () => (
  <>
    <title>Payment Verification | AntonAxel Solar</title>
    <meta
      name="description"
      content="Verifying your payment for AntonAxel solar products. Please wait while we confirm your transaction."
    />
    <meta name="robots" content="noindex, nofollow" />
    <link rel="canonical" href="https://antonaxel.com" />
  </>
);
