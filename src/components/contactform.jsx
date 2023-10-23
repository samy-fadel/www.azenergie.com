import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import { InlineWidget } from "react-calendly";


export const ContactForm = () => {
  const [state, handleSubmit] = useForm("mqkvqoop");
  if (state.succeeded) {
     alert("Thank you! Your message has been submitted."); 
     window.location.reload(); 
  }

  return (
      <div id="contactform" className="col-md-10 col-md-offset-1">
      <InlineWidget url="https://calendly.com/azenergiecom/30min" />
    </div>
     
  );
};
