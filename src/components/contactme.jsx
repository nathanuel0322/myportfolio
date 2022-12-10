import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/css/contactme.css';
import { colors } from '../GlobalStyles';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export default function ContactMe() {
    const [hovering, setHovering] = useState(false);
    const [formfilled, setFormfilled] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        const formbutton = document.getElementById("sendform");
        formbutton.disabled = true;
        formbutton.value = "Sending...";
        emailjs.sendForm('service_rb0yd56', 'template_879ls1m', '#contactme', 'dbCtiR00Etae1Fo2Q')
        .then((result) => {
            setFormfilled(true);
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    const [ref, InView] = useInView({
        threshold: 0.5,
        triggerOnce: false
    });
    const props = useSpring({
        opacity: InView ? 1 : 0,
        transform: InView ? 'translateY(0px)' : 'translateY(100px)'
    });
    const textareaprops = useSpring({
        opacity: InView ? 1 : 0,
        transform: InView ? 'translateY(0px)' : 'translateY(20rem)',
        config: {duration: 750}
    });

    return (
        formfilled ? 
            <div className='formfilled' id="contactme">
                <p style={{fontSize: '2.5rem'}}>Thank you for your message!</p>
                <p style={{fontSize: '1.5rem'}}>I will get back to you as soon as possible.</p>
            </div>
        :
            <animated.form ref={ref} className='contactme' id='contactme' onSubmit={sendEmail}>
                <animated.p className="title" style={props}>Get in touch</animated.p>
                <animated.div className='nameemail' style={props}>
                    <input type="text" name="from_name" placeholder='Name*' className='neinputs' />
                    <input type="email" name="user_email" placeholder='Email*' className='neinputs' />
                </animated.div>
                <animated.textarea style={textareaprops} name="message" placeholder='Message*'></animated.textarea>
                <animated.input type="submit" value="SEND" className='buttoncomp' id="sendform" style={Object.assign({}, props, {backgroundColor: hovering ? '#C38000' : colors.yellow})} onMouseOver={() => setHovering(true)} onMouseOut={() => setHovering(false)} />
            </animated.form>
    );
}