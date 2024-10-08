import { useRef, useEffect, useState } from "react";
import Typed from "typed.js";
import "../assets/css/topblock.css";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import React from "react";

export default function TopBlock() {
    // Create reference to store the DOM element containing the animation
    const el = useRef<HTMLSpanElement>(null);
    // Create reference to store the Typed instance itself
    const typed = useRef<Typed | null>(null);

    useEffect(() => {
        const options = {
            strings: ["Full Stack Developer", "Mobile App Developer", "Goal Achiever"],
            typeSpeed: 45,
            backSpeed: 45,
            loop: true,
        };

        // elRef refers to the <span> rendered below
        if (el.current) {
            typed.current = new Typed(el.current, options);
        }

        return () => {
            typed.current?.destroy();
        };
    }, []);

    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const topblockspring = useSpring({
        opacity: inView ? 1 : 0,
        // transform: inView ? 'translateY(0)' : 'translateY(5rem)',
        config: { duration: 500, frequency: 0.5, damping: 0.5 },
    });

    return (
        <section className="header2 cid-rzMt37x8iA fullscreen" id="header2-8">
            <div className="container" id="topblock" ref={ref}>
                <div className="row">
                    <div className="white col-md-12">
                        <animated.h1
                            className="section-title white bold fonts-style display-1-top text-right"
                            style={topblockspring}
                        >
                            Welcome to my Portfolio!
                        </animated.h1>
                        <div className="typed-text pb-3 display-1-top">
                            <span className="section-subtitle fonts-style white display-1-top">
                                I am Nathanuel and a{" "}
                            </span>
                            <br id="midspanbr" />
                            <span
                                className="animated-element bold"
                                style={{ whiteSpace: "pre", color: "#ffbc00", fontWeight: 700 }}
                                ref={el}
                            />
                        </div>
                        <animated.p className="section-text fonts-style display-5" style={topblockspring}>
                            Specialized in Web, Backend, and App Development
                        </animated.p>
                        <animated.div className="pt-3 section-btn" style={topblockspring}>
                            <div
                                className="btn-primary btn btn-md display-4"
                                onClick={() => {
                                    const skillssection = document.getElementById("aboutme-skills");
                                    if (!skillssection) return;
                                    window.scrollTo({
                                        top:
                                            skillssection.getBoundingClientRect().top +
                                            window.scrollY -
                                            window.innerHeight * 0.05,
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                ABOUT ME
                            </div>
                        </animated.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
