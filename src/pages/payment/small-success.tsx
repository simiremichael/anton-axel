import React from "react";
import { navigate } from "gatsby";
import Layout from "../../components/layout";

const SmallPaymentSuccess = () => {
  return (
    <Layout pageTitle="Payment Plan Confirmation">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <div className="text-6xl mb-6">📞</div>
              <h1 className="text-3xl font-bold text-success mb-4">
                Payment Plan Submitted!
              </h1>
              <p className="text-lg mb-6">
                Thank you for choosing the "Pay Small Small" option! An agent
                will contact you shortly to finalize your payment plan.
              </p>

              <div className="bg-base-200 p-6 rounded-lg mb-6">
                <h3 className="font-semibold mb-3">What happens next?</h3>
                <ul className="text-left space-y-2">
                  <li>✅ An agent will reach out to you within 24 hours</li>
                  <li>
                    📅 Schedule a convenient time for payment arrangements
                  </li>
                  <li>
                    📦 Your order will be processed once payment is confirmed
                  </li>
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

export default SmallPaymentSuccess;

export const Head = () => (
  <>
    <title>Payment Plan Confirmation - AntonAxel Solar</title>
  </>
);
