import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactList from "../components/ContactList";

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Field: ${name}, Value: ${value}`);
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      serviceID,
      templateID,
      form.current,
      publicKey
    )
    .then(() => {
      alert("Message sent!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    })
    .catch(() => {
      alert("Failed to send message. Please try again.");
    });
  };

  return (
    <section className="contact whoSec">
      <div className="container">
        <div className="grid grid-1">
          <h1 className="contact__title">Contact Me</h1>
        </div>

        <div className="grid grid-5">
          <form className="contact__form" ref={form} onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Subject
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows="7"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </label>

            <button type="submit" className="contact__sendBtn">
              Send Message
            </button>
          </form>

          <div className="contact__list">
            <div className="contact__name"> Paul K. Yoo</div>
            <ContactList />
          </div>
        </div>
      </div>
    </section>
  );
}