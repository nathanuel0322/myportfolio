import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/css/contactme.css';
import { colors } from '../GlobalStyles';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export default function ContactMe() {
    const [hovering, setHovering] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rb0yd56', 'template_879ls1m', '#contactme', 'dbCtiR00Etae1Fo2Q')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    // if email is invalid, don't send and give red border
    // if name is invalid, don't send and give red border
    // if message is invalid, don't send and give red border

    // when div comes into view, it will animate in from the bottom
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
        // slower than the other elements
        config: {duration: 750}
    });

    return (
        <animated.form ref={ref} className='contactme' id='contactme' onSubmit={sendEmail}>
            <animated.p className="title" style={Object.assign({}, props, {fontSize: '2rem'})}>Get in touch</animated.p>
            <animated.div className='nameemail' style={props}>
                <input type="text" name="user_name" placeholder='Name*' className='neinputs' />
                <input type="email" name="user_email" placeholder='Email*' className='neinputs' />
            </animated.div>
            <animated.textarea style={textareaprops} name="message" placeholder='Message*'></animated.textarea>
            <animated.input type="submit" value="SEND" className='buttoncomp' style={Object.assign({}, props, {border: 'none', backgroundColor: hovering ? '#C38000' : colors.yellow})} onMouseOver={() => setHovering(true)} onMouseOut={() => setHovering(false)} />
        </animated.form>
    );
}