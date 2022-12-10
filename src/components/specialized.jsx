import { ReactComponent as Apple } from '../assets/icons/mbri-apple.svg';
import { ReactComponent as Global } from '../assets/icons/mbri-globe-2.svg';
import { ReactComponent as Delivery } from '../assets/icons/mbri-delivery.svg';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export default function Specialized() {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: false
    });
    const props = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(100px)'
    });
    return (
        <animated.div ref={ref} style={Object.assign({}, props, {display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',  fontFamily: "'Dosis', sans-serif", margin: '5rem 0px'})} className="specialized">
            <p style={{fontSize: '2rem', fontWeight: 300}}>
                I'M SPE
                <span style={{borderBottom: '2px solid #232323', paddingBottom: '0.5rem'}}>CIAL</span>
                IZED IN
            </p>
            <div id='fortes' className="specialized" style={{display: 'flex', flexDirection: 'row', color: '#232323', width: '80%', margin: '2rem 0px'}}>
                {
                    [
                        [<Global />, "WEB DEVELOPMENT", "I have built several websites, most built on ReactJS, for businesses in the Tri-State Area, and am currently working on various projects."],
                        [<Apple />, "APP DEVELOPMENT", "I've completed an app that eases viewing worker hours and clocking in and out for a small contracting business in New York City. I am also actively working on another app that will greatly help to expand the customer base of urban small businesses."],
                        [<Delivery />, "IMPLEMENTATION", "I'm able to view a design of an app/website and transition it into a seamlessly clean and simplistic product."]
                    ].map((item, index) => {
                        return (
                            <div key={index} className="specialized-item" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', margin: '0 20px', width: index === 1 && '90%'}}>
                                <div className="specialized-item-icon" style={{margin: '0.25rem 0'}}>
                                    {item[0]}
                                </div>
                                <div className="specialized-item-title" style={{fontSize: '1.5rem', fontWeight: '400', color: '#000000', margin: '0.25rem 0'}}>
                                    {item[1]}
                                </div>
                                <div id="rbp" className="specialized-item-description" style={{textAlign: 'left', margin: '0.25rem 0'}}>
                                    {item[2]}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </animated.div>
    );
}