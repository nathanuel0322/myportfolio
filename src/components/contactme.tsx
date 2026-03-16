import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/css/contactme.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

export default function ContactMe() {
    const [hovering, setHovering] = useState(false);
    const [formfilled, setFormfilled] = useState(false);
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget; // correctly typed as HTMLFormElement
        const fd = new FormData(form);

        const fromName = (fd.get("from_name") ?? "").toString().trim();
        const userEmail = (fd.get("user_email") ?? "").toString().trim();
        const message = (fd.get("message") ?? "").toString().trim();

        // if any of the inputs or textarea are empty, then don't send the email
        if (!fromName || !userEmail || !message) {
            console.log("Not filled:", { fromName, userEmail, message });
            alert("Please fill out all the fields");
            return;
        }

        const formbutton = form.querySelector<HTMLButtonElement>("#sendform");
        if (!formbutton) return;
        formbutton.disabled = true;
        formbutton.textContent = "Sending...";
        // Ensure the EmailJS template receives a `reply_to` field so replies go to the user's email.
        // We populate a hidden input named "reply_to" from the user's email input before sending.
        const replyInput = form.querySelector<HTMLInputElement>('input[name="reply_to"]');
        if (replyInput) replyInput.value = userEmail;

        emailjs.sendForm("service_5wmanix", "template_hlzbuxb", "#contactme", "dbCtiR00Etae1Fo2Q").then(
            () => {
                setFormfilled(true);
                // console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            },
        );
    };

    const [ref, InView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const props = useSpring({
        opacity: InView ? 1 : 0,
        transform: InView ? "translateY(0px)" : "translateY(100px)",
    });
    const textareaprops = useSpring({
        opacity: InView ? 1 : 0,
        transform: InView ? "translateY(0px)" : "translateY(20rem)",
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
            {/* Hidden field used by EmailJS templates as the reply-to address */}
            <input type="hidden" name="reply_to" id="reply_to" />
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
