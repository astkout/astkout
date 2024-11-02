import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const ContactForm = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const sendEmail = (templateID, emailData) => {
    return emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      templateID,
      emailData,
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const emailDataToYou = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      reply_to: form.email,
      to_email: 'astkou12@gmail.com', // Your email for receiving the message
    };

    const emailDataToClient = {
      client_name: form.name,
      client_email: form.email,
    };

    try {
      // Send email to yourself
      await sendEmail(import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, emailDataToYou);
      console.log("Message to you sent successfully:", emailDataToYou);

      // Send auto-reply to client
      await sendEmail(import.meta.env.VITE_APP_EMAILJS_AUTO_REPLY_TEMPLATE_ID, emailDataToClient);
      console.log("Auto-reply to client sent successfully:", emailDataToClient);

      showAlert("Message sent successfully!");
      setForm({ name: '', email: '', message: '' }); // Clear the form after successful send
    } catch (error) {
      console.error("Error sending email:", error);
      showAlert("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
    

  return (
    <section className="c-space my-0" id="contact">
      {alert.show && <Alert {...alert} />}
      <div className="relative min-h-screen flex items-center justify-center flex-col md:mt-20">
        <img src="/assets/terminal.png" alt="terminal-bg" className="bg-image" />
        <div className="contact-container md:mt-[100px] border border-black-200 rounded-lg p-5">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-col space-y-5">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} required className="field-input" placeholder="ex., John Doe" />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="field-input" placeholder="ex., johndoe@gmail.com" />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="field-input" placeholder="Share your thoughts or inquiries..." style={{ resize: "none" }} />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <span className="loader" /> Sending...
                </>
              ) : (
                <>
                  Send Message
                  <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
