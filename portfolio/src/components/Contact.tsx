import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send the email using EmailJS
    emailjs.send(
      "YOUR_SERVICE_ID",     // EmailJS service ID
      "YOUR_TEMPLATE_ID",    // EmailJS template ID
      {
        from_name: name,
        from_email: email,
        message: message,
      },
      "YOUR_PUBLIC_KEY"      // EmailJS public key
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent!");
        setName("");
        setEmail("");
        setMessage("");
      },
      (err) => {
        console.log("FAILED...", err);
        alert("Message failed. Try again.");
      }
    );
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
