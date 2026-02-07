import { useState } from "react";         // React hook to manage form state
import emailjs from "@emailjs/browser";   // EmailJS SDK

const Contact = () => {
  // State hooks to store user input
  const [name, setName] = useState("");       // Name field
  const [email, setEmail] = useState("");     // Email field
  const [compName, setCompName] = useState(""); // Company Name field
  const [message, setMessage] = useState(""); // Message field

  // Function that runs when the form is submitted
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload

    // Send email using EmailJS
    emailjs
      .send(
        "service_12w8n8d",     // EmailJS service ID
        "template_mq43hal",    //  EmailJS template ID
        {
          from_name: name,     // Form values
          from_email: email,
          company_compName: compName, // New company field
          message: message,
        },
        "adVEwLIvr2VRr0W1V"      // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text); // Logs success
          alert("Message sent successfully!");                     // Feedback
          // Reset form fields
          setName("");
          setEmail("");
          setCompName("");
          setMessage("");
        },
        (err) => {
          console.log("FAILED...", err);         // Logs error if sending fails
          alert("Message failed. Please try again.");
        }
      );
  };

  return (
    <section id="contact">
      <h1>Contact Me</h1>

      {/* Form element with submit handler */}
      <form onSubmit={handleSubmit}>
        {/* Name input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}                       
            onChange={(e) => setName(e.target.value)}
            required                            
          />
        </div>

        {/* Email input */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Company Name input */}
        <div>
          <label htmlFor="company">Company Name:</label>
          <input
            type="text"
            id="company"
            value={compName}
            onChange={(e) => setCompName(e.target.value)}
          />
        </div>

        {/* Message textarea */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        {/* Submit button */}
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
