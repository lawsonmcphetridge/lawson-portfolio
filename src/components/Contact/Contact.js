import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const validateInput = () => {
    const nameInput = form.current['user_name'];
    const emailInput = form.current['user_email'];
    const messageInput = form.current['message'];
    const isNameValid = !!nameInput.value.trim();
    const isEmailValid =
      emailInput.value.includes('@') && emailInput.value.includes('.');
    const isMessageValid = !!messageInput.value.trim();

    setIsSubmitDisabled(!(isNameValid && isEmailValid && isMessageValid));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7dsbwrf',
        'template_ztbrsor',
        form.current,
        'l15M8_uR5VszIlfFV'
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset(); // used to reset form
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='main-content'>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type='text' name='user_name' onChange={validateInput} />
        <label>Email</label>
        <input type='email' name='user_email' onChange={validateInput} />
        <label>Message</label>
        <textarea name='message' onChange={validateInput} />
        <input type='submit' value='Send' disabled={isSubmitDisabled} />
      </form>
    </div>
  );
};
