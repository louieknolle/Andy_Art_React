import React, { useState } from "react";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/53b7dc20-6490-11ed-891b-4f350712a1f0";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <ul className="form-style-1">
        <div>
          <li>
            <label>
              Your Name <span className="required">*</span>
            </label>
            <input
              type="text"
              placeholder="Person J. Personson"
              name="name"
              required
              className="field-long"
            />
          </li>
        </div>
        <div>
          <li>
            <label>
              Email <span class="required">*</span>
            </label>
            <input
              type="email"
              placeholder="xyz@email.com"
              name="email"
              required
              className="field-long"
            />
          </li>
        </div>
        <div>
          <li>
            <label>
              Your Message <span class="required">*</span>
            </label>
            <textarea
              placeholder="I saw some of your latest work and..."
              name="message"
              required
              className="field-long field-textarea"
            />
          </li>
        </div>
        <div>
          <button type="submit"> Send a message </button>
        </div>
      </ul>
    </form>
  );
};

export default Contact;
