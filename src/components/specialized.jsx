import { ReactComponent as Apple } from '../assets/icons/mbri-apple.svg';
import { ReactComponent as Global } from '../assets/icons/mbri-globe-2.svg';
import { ReactComponent as Delivery } from '../assets/icons/mbri-delivery.svg';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import '../assets/css/specialized.css';

export default function Specialized() {
    const [ref, inView] = useInView({
        threshold: window.innerWidth < 768 ? 0.2 : 0.5,
        triggerOnce: true
    });
    const props = useSpring({
        opacity: inView ? 1 : 0
    });
    const textprops = useSpring({
        transform: inView ? 'translateY(0px)' : 'translateY(100px)',
    })
    return (
        <animated.div ref={ref} style={props} className="cid-rzMr7rM4hq" id="fortes">
            <h2 id="specializedtitle" className='section-title align-center display-2'>
                I'M SPE
                <span>CIAL</span>
                IZED IN
            </h2>
            <animated.div className="justify-content-center pt-5" id="specialtypes" ref={ref} style={textprops}>
                {
                    [
                        [<Global />, "WEB DEVELOPMENT", "I have built several websites, most built on ReactJS, for businesses in the Tri-State Area, and am currently working on various projects."],
                        [<Apple />, "APP DEVELOPMENT", "I've completed an app that eases viewing worker hours and clocking in and out for a small contracting business in New York City. I am also actively working on another app that will greatly help to expand the customer base of urban small businesses."],
                        [<Delivery />, "IMPLEMENTATION", "I'm able to view a design of an app/website and transition it into a seamlessly clean and simplistic product."]
                    ].map((item, index) => {
                        return (
                            <div key={index} className="col-md-6 row-item col-lg-4">
                                <div className="card-img align-left">
                                    {item[0]}
                                </div>
                                <h4>
                                    {item[1]}
                                </h4>
                                <p id="rbp" className="text display-7">
                                    {item[2]}
                                </p>
                            </div>
                        )
                    })
                }
            </animated.div>
        </animated.div>
    );
}