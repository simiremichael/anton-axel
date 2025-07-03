import Layout from "@/components/layout";
import React from "react";

const PrivacyPage = () => {
  return (
    <Layout pageTitle="Privacy Page">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-4">
          Effective Date: July 2, 2025
        </p>

        <p className="mb-6">
          AntonAxel Nigeria Company Limited ("we", "us", or "our") respects your
          privacy and is committed to protecting your personal information. This
          Privacy Policy explains how we collect, use, and safeguard your data
          when you visit our website.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We may collect personal information such as your name, email, phone
          number, address, and business details. Automatically collected
          information includes IP address, browser type, and usage behavior via
          cookies.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>To provide services and support</li>
          <li>Respond to inquiries</li>
          <li>Process bookings or transactions</li>
          <li>Send updates or promotional messages (if opted in)</li>
          <li>Improve website and user experience</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          3. Sharing of Your Information
        </h2>
        <p className="mb-4">
          We do not sell or rent your data. Information may be shared with
          service providers under confidentiality or if required by law.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Your Rights</h2>
        <p className="mb-4">
          You can request access, correction, or deletion of your personal data,
          or opt out of marketing at any time by contacting{" "}
          <a
            href="mailto:info@antonaxel.com.ng"
            className="text-blue-600 underline"
          >
            info@antonaxel.com.ng
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. Data Security</h2>
        <p className="mb-4">
          We implement reasonable measures to protect your data, but no online
          transmission is 100% secure.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          6. Third-Party Links
        </h2>
        <p className="mb-4">
          Our site may contain external links. We are not responsible for their
          content or privacy practices.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          7. Children's Privacy
        </h2>
        <p className="mb-4">
          Our services are not intended for children under 13. We do not
          knowingly collect data from minors.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          8. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this policy periodically. Continued use of our site
          indicates acceptance of changes.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">9. Contact Us</h2>
        <p className="mb-4">
          AntonAxel Nigeria Company Limited
          <br />
          Email:{" "}
          <a
            href="mailto:info@antonaxel.com.ng"
            className="text-blue-600 underline"
          >
            info@antonaxel.com.ng
          </a>
          <br />
          Phone: +2348024990457
        </p>
      </div>
    </Layout>
  );
};

export default PrivacyPage;
