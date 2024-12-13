import React, { FormEvent, useState } from "react";
import emailjs from "emailjs-com";
import { SuccessAlert } from "../../components/SuccessAlert";
import { FailureAlert } from "../../components/FailureAlert";
import { useAlert } from "../../utility/useAlert";
import { PreLoader } from "../../components/PreLoader";

export const SendMail: React.FC = () => {
  const SERVICE_ID = "service_6d6h9ds";
  const TEMPLATE_ID = "template_7v4wq3w";
  const TEMPLATE_ID2 = "template_pbgi4uz";
  const PUBLIC_KEY = "7-9QoUCwLRLSiaZCf";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { alert, showAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY).then(
      (response1) => {
        if (response1.status === 200) {
          emailjs.send(SERVICE_ID, TEMPLATE_ID2, formData, PUBLIC_KEY).then(
            (response2) => {
              if (response2.status === 200) {
                setLoading(false);
                showAlert("success", "Message sent successfully!");
                setFormData({ name: "", email: "", subject: "", message: "" });
              } else {
                setLoading(false);
                showAlert(
                  "error",
                  "Failed to send the message. Please try again."
                );
              }
            },
            (error2) => {
              setLoading(false);
              console.log(error2);
              showAlert(
                "error",
                "Failed to send the message. Please try again."
              );
            }
          );
        } else {
          setLoading(false);
          showAlert("error", "Failed to send the message. Please try again.");
        }
      },
      (error1) => {
        setLoading(false);
        console.log(error1);
        showAlert("error", "Failed to send first message. Please try again.");
      }
    );
  };

  return (
    <section className="bg-background text-text p-6 rounded-md shadow-lg max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-medium text-accent text-center animate-ripple mb-4">
        Reach Out and Connect
      </h1>
      <hr className="border-t-1 border-primary opacity-20 w-full mb-10" />

      {loading && <PreLoader />}
      {alert && (
        <div className="mb-4">
          {alert.type === "success" && <SuccessAlert message={alert.message} />}
          {alert.type === "error" && <FailureAlert message={alert.message} />}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-3 bg-secondary text-text rounded focus:outline-none hover:ring-primary ring-1 ring-accent"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="p-3 bg-secondary text-text rounded focus:outline-none hover:ring-primary ring-1 ring-accent"
          required
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="p-3 bg-secondary text-text rounded focus:outline-none hover:ring-primary ring-1 ring-accent"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="p-3 bg-secondary text-text rounded h-32 focus:outline-none hover:ring-primary ring-1 ring-accent"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-accent text-text hover:bg-primary-hover py-2 px-4 rounded font-medium transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};
