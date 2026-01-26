import { useState } from "react"; // Import useState hook to manage form state

// Contact component
const Contact = () => {
  // State to store form inputs
  const [name, setName] = useState("");      // User's name
  const [email, setEmail] = useState("");    // User's email
  const [message, setMessage] = useState(""); // User's message

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload on submit
    // For now, just log the inputs to the console
    console.log({ name, email, message });

    // Optional: reset form after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        {/* Name input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}                 // Bind input to state
            onChange={(e) => setName(e.target.value)} // Update state on change
            required                     // Make it required
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

        {/* Message textarea */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Submit button */}
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
