import '../assets/css/aboutmeskills.css'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

export default function AboutMeSkills() {
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
    const bottomtextprops = useSpring({
        transform: inView ? 'translateY(0px)' : 'translateY(100px)',
        config: {duration: 600}
    })
    const bottomtextprops2 = useSpring({
        transform: inView ? 'translateY(0px)' : 'translateY(100px)',
        config: {duration: 900}
    })

    return (
        <div className='aboutme-skills' id='aboutme-skills' ref={ref}>
            <animated.div className='aboutme' id="aboutme">
                <animated.h1 style={props}>ABOUT <span style={{color: "black"}}>ME</span></animated.h1>
                <animated.p style={Object.assign({}, textprops, props)}>Hi! I'm Nathanuel, an undergraduate student at New York University studying Computer Science. I'm a frontend developer with experience in React, HTML, CSS, and JavaScript. I'm currently looking for an internship position as a software engineer.</animated.p>
                <animated.p style={Object.assign({}, bottomtextprops, props)}> I tend to be a perfectionist when I'm programming, where small differences between mockups and the final product really bother me. Moreover, I'm a fast learner who aims to simultaneously learn and improve on established skills.</animated.p>
                <animated.a style={bottomtextprops2} href='https://www.linkedin.com/in/nathanueldixon0322/' target='_blank' rel='noreferrer'>
                    <img src={require('../assets/icons/linkedin.png')} alt='LinkedIn' />
                </animated.a>
            </animated.div>
            <div className='skills' id='skills'>
                <animated.h1 style={props}>MY <span>SKILLS</span></animated.h1>
                <animated.p style={Object.assign({}, bottomtextprops, props)}>I have gotten hands on with various languages and frameworks, but I'd say that ReactJS and Javascript are my strengths when it comes to frontend development. I'm also familiar with HTML, CSS, Java, NodeJS, and ExpressJS. React Native is another framework that I've been working with during the past few months. I'm also very knowledgeable in Git and GitHub, and I've used them for both solo and collaborated projects.</animated.p>
                <animated.div className='skills-list' style={bottomtextprops2}>
                    {
                        [["ReactJS", 90], ["Java", 60], ["NodeJS", 80], ["ExpressJS", 100], ["React Native", 95]].map((skill, index) => {
                            return (
                                <div className='skill' key={index}>
                                    <div>
                                        <p>{skill[0]}</p>
                                        <p>{skill[1]}%</p>
                                    </div>
                                    <div className='skill-bar'>
                                        <div className='skill-bar-fill' style={{width: `${skill[1]}%`}}></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </animated.div>
            </div>
        </div>
    )
}