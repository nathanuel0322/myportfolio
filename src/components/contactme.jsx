import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/css/contactme.css';
import { colors } from '../GlobalStyles';

export default function ContactMe() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rb0yd56', 'template_879ls1m', form.current, 'dbCtiR00Etae1Fo2Q')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    // if email is invalid, don't send and give red border
    // if name is invalid, don't send and give red border
    // if message is invalid, don't send and give red border
    return (
        <form ref={form} className='contactme' id='contactme' onSubmit={sendEmail}>
            <p className="title" style={{fontSize: '2rem'}}>Get in touch</p>
            <div className='nameemail'>
                <input type="text" name="user_name" placeholder='Name*' className='neinputs' />
                <input type="email" name="user_email" placeholder='Email*' className='neinputs' />
            </div>
            <textarea name="message" placeholder='Message*'></textarea>
            <input type="submit" value="SEND" className='buttoncomp' style={{border: 'none', backgroundColor: colors.yellow, width: '18%'}}/>
        </form>
    );
}