import { useRef, useEffect } from "react";
import Typed from "typed.js";
import Header from "./header";
import '../assets/css/topblock.css';
import { colors } from "../GlobalStyles";
import Button from "./buttons";

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

  return (
    <div className="topblock">
        <Header />
        <div className="topblock__content">
            <p className="tbtitle">Welcome to my Portfolio!</p>
            <p style={{color: colors.yellow}}><span className="tbdesc">I am Nathanuel and a </span><span style={{ whiteSpace: 'pre', color: colors.yellow, fontWeight: 700 }} ref={el} /></p>
            <p className="tbcaption" style={{marginBottom: '2rem'}}>Specialized in Web and App Development</p>
            <Button href={''} text={'ABOUT ME'} />
        </div>
    </div>
  );
}