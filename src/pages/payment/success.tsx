import React from "react";
import { navigate } from "gatsby";
import Layout from "../../components/layout";

const PaymentSuccess = () => {
  return (
    <Layout pageTitle="Payment Successful">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <div className="text-8xl mb-6">🎉</div>
              <h1 className="text-4xl font-bold text-success mb-4">
                Payment Successful!
              </h1>
              <p className="text-lg mb-6">
                Thank you for your purchase! Your order has been confirmed and
                we'll begin processing it immediately.
              </p>

              <div className="bg-base-200 p-6 rounded-lg mb-6">
                <h3 className="font-semibold mb-3">What happens next?</h3>
                <ul className="text-left space-y-2">
                  <li>✅ You'll receive an order confirmation email shortly</li>
                  <li>📦 Our team will prepare your solar equipment</li>
                  <li>🚚 We'll contact you to arrange delivery</li>
                  <li>🔧 Professional installation can be arranged</li>
                </ul>
              </div>

              <div className="card-actions justify-center gap-4">
                <button
                  onClick={() => navigate("/products")}
                  className="btn btn-primary"
                >
                  Continue Shopping
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="btn btn-outline"
                >
                  Back to Home
                </button>
              </div>

              <div className="mt-6 text-sm text-gray-500">
                <p>
                  Need help? Contact us at sales@antonaxel.com.ng or call
                  +234-8024990457
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentSuccess;

export const Head = () => (
  <>
    <title>Payment Successful | AntonAxel Solar</title>
    <meta name="description" content="Payment successful! Your AntonAxel solar product order has been confirmed. We'll contact you shortly to arrange delivery and installation." />
    <meta name="robots" content="noindex, nofollow" />
    <link rel="canonical" href="https://antonaxel.com" />
  </>
);
