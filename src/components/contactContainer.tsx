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

  //    const router = useRouter();

  const sendMail = React.useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    // @ts-ignore
    emailjs
      .sendForm(
        "service_gi13uul",
        "template_08yurua",
        // @ts-ignore
        sendMail?.current,
        "user_OjPcBuLBsMA0wASXXMw7Z"
      )
      .then(
        (result: { text: React.SetStateAction<string> }) => {
          console.log(result.text);
          setAlert(result.text);
        },
        (error: { text: any }) => {
          console.log(error.text);
        }
      );

    // router.push('/')
  };

  React.useEffect(() => {
    if (alert !== "") {
      navigate("/");
    }
  }, [alert]);

  return (
    <div className="service-container mt-10 mb-5 bg-pallet2">
      <h1 className="font-bold text-2xl mb-3">CONTACT US</h1>
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
                onChange={(e: any) =>
                  setFormData({ ...formData, name: e.target.value })
                }
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
                onChange={(e: any) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
                onChange={(e: any) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
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
                onChange={(e: any) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              ></Textarea>
            </div>
            <div className="flex  mt-5 mb-5">
              <Button className="bg-pallet4">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactContainer;
