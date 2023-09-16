import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("mqkvqoop");
  if (state.succeeded) {
     alert("Thank you! Your message has been submitted."); 
     window.location.reload(); 
  }

  return (
    <div id='contactform' className='text-center'>
      <div id="contactform" className="text-center section-title">
        <h2 className="mb-3">Contact</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              nom et Prenom
            </label>
            <input className="form-control" type="text" id="name" name="name" required />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" name="email" required />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" name="message" required />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
