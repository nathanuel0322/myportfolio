import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/css/contactme.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

export default function ContactMe() {
    const [hovering, setHovering] = useState(false);
    const [formfilled, setFormfilled] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        // if any of the inputs or textarea are empty, then don't send the email
        if (e.target[0].value === "" || e.target[1].value === "" || e.target[2].value === "") {
            alert("Please fill out all the fields");
            return;
        } else {
            const formbutton = document.getElementById("sendform") as HTMLButtonElement;
            if (!formbutton) return;
            formbutton.disabled = true;
            formbutton.value = "Sending...";
            emailjs.sendForm("service_5wmanix", "template_879ls1m", "#contactme", "dbCtiR00Etae1Fo2Q").then(
                () => {
                    setFormfilled(true);
                    // console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        }
    };
    const [ref, InView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const [debouncedInView, setDebouncedInView] = useState(InView);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedInView(InView);
        }, 100);

        return () => {
            clearTimeout(handler);
        };
    }, [InView]);

    const props = useSpring({
        opacity: debouncedInView ? 1 : 0,
        transform: debouncedInView ? "translateY(0px)" : "translateY(100px)",
    });
    const textareaprops = useSpring({
        opacity: debouncedInView ? 1 : 0,
        transform: debouncedInView ? "translateY(0px)" : "translateY(20rem)",
        config: { duration: 750 },
    });

    return formfilled ? (
        <div className="formfilled" id="contactme">
            <p className="text-4xl">Thank you for your message!</p>
            <p className="text-2xl">I will get back to you as soon as possible.</p>
        </div>
    ) : (
        <animated.form ref={ref} className="contactme" id="contactme" onSubmit={sendEmail}>
            <animated.p className="title" style={props}>
                Get in touch
            </animated.p>
            <animated.div className="nameemail" style={props}>
                <input type="text" name="from_name" placeholder="Name*" className="neinputs" />
                <input type="email" name="user_email" placeholder="Email*" className="neinputs" />
            </animated.div>
            <animated.textarea style={textareaprops} name="message" placeholder="Message*"></animated.textarea>
            <input
                className="hidden"
                type="email"
                value="nathanthe6est@gmail.com"
                name="to_email"
                placeholder="Email"
                readOnly={true}
            />
            <animated.input
                type="submit"
                value="SEND"
                className="buttoncomp"
                id="sendform"
                style={Object.assign({}, props, { backgroundColor: hovering ? "#C38000" : "#ffbc00" })}
                onMouseOver={() => setHovering(true)}
                onMouseOut={() => setHovering(false)}
            />
        </animated.form>
    );
}
