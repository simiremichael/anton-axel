import { navigate } from "gatsby";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

function ContactContainer() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [alert, setAlert] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<any>("");

  const sendMail = React.useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_x7e1yub",
        "template_8et6gla",
        // @ts-ignore
        sendMail?.current,
        "-da9MVSm3FpvvuNXp"
      )
      .then(
        (result: { text: React.SetStateAction<string> }) => {
          console.log(result.text);
          setLoading(false);
          setAlert("Message sent successfully!");
          setTimeout(() => {
            navigate("/");
          }, 3000);
        },
        (error: { text: any }) => {
          console.log(error.text);
          setLoading(false);
          setError("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="service-container bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-2 bg-orange-100 text-[#705c53] rounded-full text-sm font-medium mb-4">
          Get In Touch
        </span>
        <h2 className="text-4xl max-md:text-3xl font-bold text-gray-900 mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Let's discuss how we can help transform your vision into reality
        </p>
      </div>

      {error && (
        <div className="max-w-2xl mx-auto mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
          <svg
            className="w-5 h-5 text-red-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
          </svg>
          <span className="text-red-700">{error}</span>
        </div>
      )}

      {alert && (
        <div className="max-w-2xl mx-auto mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
          <svg
            className="w-5 h-5 text-green-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          <span className="text-green-700">{alert}</span>
        </div>
      )}

      <div className="grid grid-cols-12 gap-6 lg:gap-12 items-center">
        <div className="md:col-span-6 col-span-12 order-2 md:order-1">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#705c53] to-[#8b6f47] rounded-2xl transform rotate-3 opacity-20"></div>
            <div className="contact-container relative rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-white">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4">
                  Let's Build Something Amazing Together
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <span>info@antonaxel.com.ng</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    <span>08024990457</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span>Lagos, Nigeria</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 col-span-12 order-1 md:order-2">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            {/* @ts-ignore */}
            <form ref={sendMail} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#705c53] focus:border-transparent transition-all duration-300"
                  onChange={(e) => {
                    setError(
                      !e.target.value
                        ? "Please enter your name"
                        : !/^[A-Za-z\s]+$/.test(e.target.value)
                        ? "Please enter a valid name"
                        : ""
                    );
                    setFormData({ ...formData, name: e.target.value });
                  }}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#705c53] focus:border-transparent transition-all duration-300"
                  onChange={(e) => {
                    setError(
                      !e.target.value
                        ? "Please enter your email"
                        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)
                        ? "Please enter a valid email address"
                        : ""
                    );
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#705c53] focus:border-transparent transition-all duration-300"
                  onChange={(e) => {
                    setError(
                      !e.target.value
                        ? "Please enter your phone number"
                        : !/^\d{11}$/.test(e.target.value)
                        ? "Please enter a valid 11-digit phone number"
                        : ""
                    );
                    setFormData({ ...formData, phone: e.target.value });
                  }}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#705c53] focus:border-transparent transition-all duration-300 min-h-[120px]"
                  name="message"
                  id="message"
                  placeholder="Tell us about your project..."
                  onChange={(e) => {
                    setError(
                      !e.target.value
                        ? "Please enter your message"
                        : e.target.value.length < 10
                        ? "Message must be at least 10 characters long"
                        : ""
                    );
                    setFormData({ ...formData, message: e.target.value });
                  }}
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full py-3 sm:py-4 bg-gradient-to-r from-[#705c53] to-[#8b6f47] text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactContainer;
