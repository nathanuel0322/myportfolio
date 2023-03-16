import { projects } from "../projectarr";
import Button from "./buttons";
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import '../assets/css/mywork.css'

export default function MyWork() {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true
    });
    const props = useSpring({
        opacity: inView ? 1 : 0
    });
    const textprops = useSpring({
        transform: inView ? 'translateY(0px)' : 'translateY(100px)',
    })
    return (
        <animated.div id="my-work" ref={ref} style={props}>
            <p>
                MY
                <span> WO</span>
                RK
            </p>
            <animated.div style={textprops}>
                {
                    projects.map((item, index) => {
                        return (
                            <div key={index} className="my-work-item">
                                <div>
                                    <img src={item.picture} alt={item.title} />
                                </div>
                                <div className="my-work-item-title">
                                    {item.title}
                                </div>
                                <div></div>
                                <div className="my-work-item-description">
                                    {item.description}
                                </div>
                                <Button href={item.link1} text={item.inprogress ? "In Progress" : "View Project"} external={true} />
                            </div>
                        )  
                    })
                }
            </animated.div>
        </animated.div>
    )
}