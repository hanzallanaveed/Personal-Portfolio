import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q72eils', 'template_dce4wus', form.current, 'dMKmNTHJ9kA6GYuLU')
      .then((result) => {
          console.log('result.text');
          e.target.reset();
          alert('Message sent successfully!');
        }, (error) => {
          console.log(error.text);
        });
  };
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className='contactPageTitle'>Contact Me</h1>
        <hr className='titleDivider' style={{ width: '1400px'}} />
        <span className='contactDesc'> Please fill out the form below to contact me. I will get back to you as soon as possible. </span>
        <form className='contactForm' ref={form} onSubmit = {sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name='from_name' required />
          <input type="email" className="email" placeholder="Your Email" name='from_email' required />
          <textarea className="msg" name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" value='Send' className="submitBtn">Submit</button>
          <div className="links">
    <a href="https://github.com/hanzallanaveed" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="3rem" height="3rem" className="link" fill="currentcolor">
            <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"/>
        </svg>
    </a>
    <a href="https://www.linkedin.com/in/hanzalla-naveed/" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="3rem" height="3rem" className="link" fill="currentcolor">
            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" fill="#0077b5" />
        </svg>
    </a>
    <a href="tel:+1-905-922-8771" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.314 28.323" width="3rem" height="3rem" className="link" style={{ color: "#0077b5" }}>
            <path fill="currentColor" d="M27.728,20.384l-4.242-4.242c-0.377-0.378-0.879-0.586-1.413-0.586c0,0-0.001,0-0.002,0c-0.534,0-1.036,0.209-1.413,0.586 l-2.828,2.828l-8.485-8.485l2.828-2.828c0.78-0.78,0.78-2.05-0.001-2.83L7.929,0.585C7.552,0.208,7.05,0,6.516,0H6.515 C5.98,0,5.478,0.209,5.101,0.587L0.858,4.83C0.729,4.958-0.389,6.168,0.142,8.827c0.626,3.129,3.246,7.019,7.787,11.56 c6.499,6.499,10.598,7.937,12.953,7.937c1.63,0,2.426-0.689,2.604-0.867l4.242-4.242c0.378-0.378,0.587-0.881,0.586-1.416 C28.314,21.265,28.106,20.762,27.728,20.384z M22.072,26.042c-0.028,0.028-3.409,2.249-12.729-7.07 C-0.178,9.452,2.276,6.243,2.272,6.244L6.515,2l4.243,4.244L7.223,9.779c-0.391,0.391-0.391,1.023,0,1.414l9.899,9.899 c0.391,0.391,1.023,0.391,1.414,0l3.535-3.536l4.243,4.244L22.072,26.042z"/>
        </svg>
    </a>
</div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
