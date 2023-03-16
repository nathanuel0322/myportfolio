import { useRef, useEffect } from "react";
import Typed from "typed.js";
import '../assets/css/topblock.css';
import { colors } from "../GlobalStyles";
import Button from "./buttons";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

export default function TopBlock() {
	// Create reference to store the DOM element containing the animation
	const el = useRef(null);
    // Create reference to store the Typed instance itself
	const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'Web Developer',
                'Mobile App Developer',
                'Goal Achiever',
            ],
            typeSpeed: 45,
            backSpeed: 45,
            loop: true,
        };
        
        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);
        
        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, [])

    const [ref, inView] = useInView({
        /* Optional options */
        threshold: 0.75,
        triggerOnce: true
    });
    const topblockspring = useSpring({
        opacity: inView ? 1 : 0,
        // transform: inView ? 'translateY(0)' : 'translateY(5rem)', 
        config: { duration: 500, bounce: true, frequency: 0.5, damping: 0.5 }
    });

  return (
    <section className="header2 cid-rzMt37x8iA fullscreen" id="header2-8">
        <div className="container" id="topblock" ref={ref}>
            <div className="row">
                <div className="white col-md-12">
                    <animated.h1 className="section-title white bold fonts-style display-1-top" style={topblockspring}>Welcome to my Portfolio!</animated.h1>
                    <div className="typed-text pb-3 display-1-top">
                        <span className="section-subtitle fonts-style white display-1-top">I am Nathanuel and a </span>
                        <span className="animated-element bold" style={{ whiteSpace: 'pre', color: colors.yellow, fontWeight: 700 }} ref={el} />
                    </div>
                    <animated.p className="section-text fonts-style display-5" style={topblockspring}>
                        Specialized in Web and App Development
                    </animated.p>
                    <animated.div className="pt-3 section-btn" style={topblockspring}>
                        <a className="btn-primary btn btn-md display-4" type="submit" href="#aboutme-skills">ABOUT ME</a>
                    </animated.div>
                </div>
            </div>
        </div>
    </section>
  );
}