// @ts-nocheck

import "./Contact.css"
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Wallpaper4 from './wallpaper8.jpg';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const currentForm = form.current;
    // this prevents sending emails if there is no form.
    // in case currentForm cannot possibly ever be null,
    // you could alert the user or throw an Error, here
    if (currentForm == null) return;

    emailjs
      .sendForm('service_1861phe', 'template_lozwqgi', currentForm, {
        publicKey: '9amzMgmN6OMihXwfo',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert(JSON.stringify(error.text));
        },
      );
  };

  return (
    <div className="contact-img-container"><img src= {Wallpaper4} alt="Wallpaper" />
      <div className="contact-container">
        <h1> Want to <br />
         Hire Me?</h1>
      </div>
      <div className='contact-info'>
      2827, Dunvale road, <br />
      Houston, Texas, <br />
      United States, <br />
      Zip Code : 77063 <br />
      <hr />
      <IoIosCall />: +1 (346) 293-5484 <br />
      <MdOutlineEmail />: priyanshi.singh833@gmail.com < br />
      < br />
      <div className="contact-form">
      <form ref={form} onSubmit={sendEmail}>
      <div style={{margin: "20px", fontSize: "18px"}}><label>Name: </label>
      <input type="text" name="user_name" /></div>

      <div style={{margin: "20px", fontSize: "18px"}}><label>Email: </label>
      <input type="email" name="user_email" /></div>

      <div style={{margin: "20px", fontSize: "18px"}}><label>Message: </label>
      <textarea name="message" /></div>

      <div style={{margin: "10px", textAlign: 'center'}}><input type="submit" value="Send" /></div>
    </form>
    </div>

      <a href='https://www.linkedin.com/in/priyanshi-singh-977279164?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target="_blank">
      <FaLinkedin style={{margin: '3%', color: '#0077B5'}}/></a>
      <a href='https://www.facebook.com/profile.php?id=100006526864595&mibextid=LQQJ4d' target="_blank">
      <FaFacebook style={{margin: '3%', color: '#316FF6'}}/></a>
      <a href='https://www.youtube.com/@IamPsingh' target="_blank">
      <FaYoutube style={{margin: '3%', color: '#FF0000'}}/></a>
      </div>
      </div>
  )
}

export default Contact