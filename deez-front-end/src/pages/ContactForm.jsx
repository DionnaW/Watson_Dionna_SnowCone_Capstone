import React, { useState } from 'react';

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function submitForm(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div>
        Thank you. We've received the form and will get back to you in 24-72 hours.
      </div>
    );
  }

  return (
    <form onSubmit={submitForm} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label htmlFor="message">Information goes here:</label>
      <textarea id="message" name="message" rows="8" style={{width: '80%', margin: '10px' }} required></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;