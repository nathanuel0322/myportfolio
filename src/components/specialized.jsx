import { ReactComponent as Apple } from '../assets/icons/mbri-apple.svg';
import { ReactComponent as Global } from '../assets/icons/mbri-globe-2.svg';
import { ReactComponent as Delivery } from '../assets/icons/mbri-delivery.svg';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import '../assets/css/specialized.css';

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
        <animated.section ref={ref} style={props} className="specialized cid-rzMr7rM4hq" id="features1-1">
            <div className='container'>
                <h2 style={{fontSize: '2rem'}} className='fonts-style section-title align-center display-2'>
                    I'M SPE
                    <span style={{borderBottom: '2px solid #232323', paddingBottom: '0.5rem'}}>CIAL</span>
                    IZED IN
                </h2>
                <div id='fortes' className="specialized row justify-content-center pt-5">
                    {
                        [
                            [<Global />, "WEB DEVELOPMENT", "I have built several websites, most built on ReactJS, for businesses in the Tri-State Area, and am currently working on various projects."],
                            [<Apple />, "APP DEVELOPMENT", "I've completed an app that eases viewing worker hours and clocking in and out for a small contracting business in New York City. I am also actively working on another app that will greatly help to expand the customer base of urban small businesses."],
                            [<Delivery />, "IMPLEMENTATION", "I'm able to view a design of an app/website and transition it into a seamlessly clean and simplistic product."]
                        ].map((item, index) => {
                            return (
                                <div key={index} className="specialized-item col-md-6 row-item col-lg-4">
                                    <div className="specialized-item-icon card-img pb-3 align-left">
                                        {item[0]}
                                    </div>
                                    <h4 className="specialized-item-title fonts-style card-title display-5" style={{fontSize: '1.5rem', fontWeight: '400', color: '#000000', margin: '0.25rem 0'}}>
                                        {item[1]}
                                    </h4>
                                    <p id="rbp" className="specialized-item-description text fonts-style display-7">
                                        {item[2]}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </animated.section>
    );
}