import Layout from "@/components/layout";
import React from "react";

const PrivacyPage = () => {
  return (
    <Layout pageTitle="Privacy Page">
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-orange-100 text-[#705c53] rounded-full text-sm font-medium mb-4">
                Legal Information
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Privacy Policy
              </h1>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-sm">Effective Date: July 2, 2025</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-r from-[#705c53]/10 to-orange-100/50 rounded-xl p-6 mb-8">
                <p className="text-gray-700 leading-relaxed m-0">
                  AntonAxel Nigeria Company Limited ("we", "us", or "our") respects your
                  privacy and is committed to protecting your personal information. This
                  Privacy Policy explains how we collect, use, and safeguard your data
                  when you visit our website.
                </p>
              </div>

              <div className="space-y-8">
                <section className="border-l-4 border-[#705c53] pl-6">
                  <h2 className="text-2xl font-bold text-[#705c53] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-[#705c53] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Information We Collect
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may collect personal information such as your name, email, phone
                    number, address, and business details. Automatically collected
                    information includes IP address, browser type, and usage behavior via
                    cookies.
                  </p>
                </section>

                <section className="border-l-4 border-[#705c53] pl-6">
                  <h2 className="text-2xl font-bold text-[#705c53] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-[#705c53] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    How We Use Your Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Provide services and support",
                      "Respond to inquiries",
                      "Process bookings or transactions",
                      "Send updates or promotional messages",
                      "Improve website and user experience",
                      "Comply with legal obligations"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <svg className="w-5 h-5 text-[#705c53] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {[
                  { title: "Sharing of Your Information", content: "We do not sell or rent your data. Information may be shared with service providers under confidentiality or if required by law." },
                  { title: "Your Rights", content: "You can request access, correction, or deletion of your personal data, or opt out of marketing at any time." },
                  { title: "Data Security", content: "We implement reasonable measures to protect your data, but no online transmission is 100% secure." },
                  { title: "Third-Party Links", content: "Our site may contain external links. We are not responsible for their content or privacy practices." },
                  { title: "Children's Privacy", content: "Our services are not intended for children under 13. We do not knowingly collect data from minors." },
                  { title: "Changes to This Policy", content: "We may update this policy periodically. Continued use of our site indicates acceptance of changes." }
                ].map((section, index) => (
                  <section key={index} className="border-l-4 border-[#705c53] pl-6">
                    <h2 className="text-2xl font-bold text-[#705c53] mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 bg-[#705c53] text-white rounded-full flex items-center justify-center text-sm font-bold">{index + 3}</span>
                      {section.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  </section>
                ))}

                <section className="border-l-4 border-[#705c53] pl-6">
                  <h2 className="text-2xl font-bold text-[#705c53] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-[#705c53] text-white rounded-full flex items-center justify-center text-sm font-bold">9</span>
                    Contact Us
                  </h2>
                  <div className="bg-gradient-to-r from-[#705c53]/10 to-orange-100/50 rounded-xl p-6">
                    <h3 className="font-bold text-gray-900 mb-4">AntonAxel Nigeria Company Limited</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-[#705c53]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        <a href="mailto:info@antonaxel.com.ng" className="text-[#705c53] hover:text-[#8b6f47] font-medium transition-colors">
                          info@antonaxel.com.ng
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-[#705c53]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                        <span className="text-gray-700 font-medium">+2348024990457</span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPage;

export const Head = () => (
  <>
    <title>Privacy Policy | AntonAxel Nigeria Company Limited</title>
    <meta name="description" content="Read AntonAxel Nigeria's Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy and data security are our priority." />
    <meta name="keywords" content="privacy policy, data protection, personal information, AntonAxel privacy, data security, user rights" />
    <meta name="author" content="AntonAxel Nigeria Company Limited" />
    <meta property="og:title" content="Privacy Policy | AntonAxel Nigeria Company Limited" />
    <meta property="og:description" content="Read AntonAxel Nigeria's Privacy Policy to understand how we collect, use, and protect your personal information." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://antonaxel.com/privacy" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Privacy Policy | AntonAxel Nigeria Company Limited" />
    <meta name="twitter:description" content="Read AntonAxel Nigeria's Privacy Policy to understand how we collect, use, and protect your personal information." />
    <link rel="canonical" href="https://antonaxel.com/privacy" />
    <meta name="robots" content="index, follow" />
  </>
);
