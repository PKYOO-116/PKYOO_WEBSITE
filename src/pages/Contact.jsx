import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import ContactList from "../components/ContactList";

export default function Contact() {
  const [formState, handleSubmit] = useForm("mnngvelw");
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    if (formState.succeeded) {
      setShowPopup(true);
      const timer = setTimeout(() => setShowPopup(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [formState.succeeded]);

  return (
    <section className="contact whoSec">
      <div className="container">
        <div className="grid grid-1">
          <h1 className="contact__title">Contact Me</h1>
        </div>

        <div className="grid grid-5">
          <form className="contact__form" onSubmit={handleSubmit}>
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
              <ValidationError prefix="Email" field="email" errors={formState.errors} />
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
              />
              <ValidationError prefix="Message" field="message" errors={formState.errors} />
            </label>

            <button
              type="submit"
              className="contact__sendBtn"
              disabled={formState.submitting}
            >
              Send Message
            </button>
          </form>

          <div className="contact__list">
            <div className="contact__name"> Paul K. Yoo</div>
            <ContactList />
          </div>
        </div>

        {showPopup && (
          <div className="popup">
            <div className="popup__content">
              <span className="popup__close" onClick={() => setShowPopup(false)}>
                &times;
              </span>
              <p> Thank you for reaching out! </p>
              <p> I received your message. </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}