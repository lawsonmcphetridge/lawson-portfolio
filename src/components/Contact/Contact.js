import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss';

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
      <form ref={form} onSubmit={sendEmail} className='email-form'>
        <h2>Contact Me</h2>
        <div className='form-group'>
          <label htmlFor='user_name'>Name</label>
          <input
            type='text'
            name='user_name'
            id='user_name'
            onChange={validateInput}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='user_email'>Email</label>
          <input
            type='email'
            name='user_email'
            id='user_email'
            onChange={validateInput}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            id='message'
            onChange={validateInput}
          ></textarea>
        </div>
        <div className='form-group'>
          <input type='submit' value='Send' disabled={isSubmitDisabled} />
        </div>
      </form>
    </div>
  );
};

export default Contact;
