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

  //    const router = useRouter();

  const sendMail = React.useRef();
  // "service_gi13uul",
  // "template_08yurua",
  // "user_OjPcBuLBsMA0wASXXMw7Z";

  const sendEmail = (e: any) => {
    e.preventDefault();
    // @ts-ignore
    setLoading(true);
    emailjs
      .sendForm(
        // "service_gi13uul",
        // "template_08yurua",
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
          setAlert("message sent successfully");
          setTimeout(() => {
            navigate("/");
          }, 3000);
        },
        (error: { text: any }) => {
          console.log(error.text);
          setLoading(false);
          setError("Failed to send message");
        }
      );

    // router.push('/')
  };

  // React.useEffect(() => {
  //   if (alert !== "") {
  //     navigate("/");
  //   }
  // }, [alert]);

  return (
    <div className="service-container bg-[#F5F5F7] mt-10 mb-5 bg-pallet2">
      <h1 className="font-bold text-2xl mb-3 mt-3">Contact Us</h1>
      {error && (
        <div
          role="alert"
          className="alert alert-error"
          style={{ marginBottom: "1rem" }}
        >
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
      {alert && (
        <div
          role="alert"
          className="alert alert-success"
          style={{ marginBottom: "1rem" }}
        >
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
          <span>{alert}</span>
        </div>
      )}

      <div className="grid grid-cols-12 gap-4">
        <div className="md:col-span-6 col-span-12 contact-container"></div>
        <div className="md:col-span-6 col-span-12">
          {/* @ts-ignore */}
          <form ref={sendMail} onSubmit={sendEmail}>
            <div className=" mb-2">
              <label
                className="contact-label"
                id="name"
                style={{ display: "block" }}
              >
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered w-full"
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
            <div className="inner-input-container mb-2">
              <label
                className="contact-label"
                id="email"
                style={{ display: "block" }}
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered w-full"
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
            <div className="inner-input-container mb-2">
              <label
                className="contact-label"
                id="phone"
                style={{ display: "block" }}
              >
                Phone
              </label>
              <Input
                id="phone"
                name="phone"
                type="text"
                placeholder="Phone"
                className="input input-bordered w-full"
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
            <div className="inner-input-container mb-2">
              <label
                className="contact-label"
                id="message"
                style={{ display: "block" }}
              >
                Message
              </label>
              <Textarea
                className="textarea textarea-bordered w-full"
                name="message"
                id="message"
                placeholder="Message"
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
              ></Textarea>
            </div>
            <div className="flex  mt-5 mb-5">
              <Button
                // disabled={loading}
                type="submit"
                className="btn bg-[#705C53] text-white"
              >
                {loading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactContainer;
