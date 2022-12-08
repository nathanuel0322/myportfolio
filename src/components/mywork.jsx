import { colors } from "../GlobalStyles";
import { projects } from "../projectarr";
import Button from "./buttons";
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';


export default function MyWork() {
    // when div comes into view, it will animate in from the bottom
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: false
    });
    const props = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(100px)'
    });
    return (
        <animated.div className="my-work" id="my-work" ref={ref} style={Object.assign({}, props, {fontFamily: "'Dosis', sans-serif", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
         margin: '5rem 0px', 
        color: '#232323'})}>
            <p style={{fontSize: '2rem', fontWeight: 300}}>
                MY
                <span style={{borderBottom: '2px solid #232323', paddingBottom: '0.5rem'}}> WO</span>
                RK
            </p>
            <div className="my-work-items" style={{display: 'flex', flexDirection: 'row', width: '80%', margin: '2rem 0px'}}>
                {
                    projects.map((item, index) => {
                        return (
                            <div key={index} className="my-work-item" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 1rem', width: '33%'}}>
                                <div className="my-work-item-image" style={{height: '15rem', width: '15rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <img src={item.picture} alt={item.title} style={{width: '100%', height: 'auto', borderRadius: 10}} />
                                </div>
                                <div className="my-work-item-title" style={{fontSize: '1.4rem', fontWeight: '700', margin: '0.25rem 0'}}>
                                    {item.title}
                                </div>
                                <div style={{width: '5rem', borderBottom: `2px solid ${colors.yellow}`}}>
                                </div>
                                <div className="my-work-item-description" style={{margin: '2rem 0'}}>
                                    {item.description}
                                </div>
                                <Button href={item.link1} text={item.inprogress ? "In Progress" : "View Project"} external={true} />
                            </div>
                        )  
                    })
                }
            </div>
        </animated.div>
    )
}