import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(''); // To track the form submission status

  // Dynamically load the EmailJS script and initialize
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.type = 'text/javascript';
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Initialize EmailJS once the script is loaded
    script.onload = () => {
      emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your actual public key
    };

    return () => {
      // Clean up by removing the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('All fields are required.');
      return;
    }

    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
      .then((response) => {
        console.log('Email sent successfully', response);
        setStatus('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email', error);
        setStatus('Failed to send message. Please try again.');
      });

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Send Message</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
};

export default ContactForm;