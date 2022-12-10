import { useRef, useEffect } from "react";
import Typed from "typed.js";
import Header from "./header";
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
    const topblockspring = useSpring({ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(5rem)', config: { duration: 500, bounce: true, frequency: 0.5, damping: 0.5 } });

  return (
    <div className="topblock" id="topblock" ref={ref}>
        <Header />
        <div className="topblock__content">
            <animated.p className="tbtitle" style={topblockspring}>Welcome to my Portfolio!</animated.p>
            <p style={{color: colors.yellow, margin: '0px 0px', paddingBottom: '1rem'}}><span className="tbdesc">I am Nathanuel and a </span><span style={{ whiteSpace: 'pre', color: colors.yellow, fontWeight: 700 }} ref={el} /></p>
            <animated.p className="tbcaption" style={topblockspring}>Specialized in Web and App Development</animated.p>
            <animated.div id="abbuttondiv" style={topblockspring}>
                <Button href={'#aboutme-skills'} text={'ABOUT ME'} />
            </animated.div>
        </div>
    </div>
  );
}