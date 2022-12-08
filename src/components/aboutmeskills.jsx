import '../assets/css/aboutmeskills.css'
import { colors } from '../GlobalStyles'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

export default function AboutMeSkills() {
    // when div comes into view, it will animate in from the bottom
    const [aboutmeRef, aboutmeInView] = useInView({
        threshold: 0.5,
        triggerOnce: false
    });
    const aboutmeProps = useSpring({
        opacity: aboutmeInView ? 1 : 0,
        transform: aboutmeInView ? 'translateY(0px)' : 'translateY(100px)'
    });
    return (
        <div className='aboutme-skills' id='aboutme-skills' ref={aboutmeRef}>
            <animated.div className='aboutme'>
                <animated.h1 style={aboutmeProps}>ABOUT <span style={{color: "black"}}>ME</span></animated.h1>
                <animated.p style={aboutmeProps}>Hi! I'm Nathanuel, an undergraduate student at New York University studying Computer Science. I'm a frontend developer with experience in React, HTML, CSS, and JavaScript. I'm currently looking for an internship position as a software engineer.</animated.p>
                <animated.p style={aboutmeProps}> I tend to be a perfectionist when I'm programming, where small differences between mockups and the final product really bother me. Moreover, I'm a fast learner who aims to simultaneously learn and improve on established skills.</animated.p>
                <animated.a style={Object.assign({}, aboutmeProps, {textDecoration: 'none'})} href='https://www.linkedin.com/in/nathanueldixon0322/' target='_blank' rel='noreferrer'>
                    <img src={require('../assets/icons/linkedin.png')} alt='LinkedIn' />
                </animated.a>
            </animated.div>
            <div className='skills'>
                <animated.h1 style={aboutmeProps}>MY <span style={{color: colors.yellow}}>SKILLS</span></animated.h1>
                <animated.p style={aboutmeProps}>I have gotten hands on with various languages and frameworks, but I'd say that ReactJS and Javascript are my strengths when it comes to frontend development. I'm also familiar with HTML, CSS, Java, NodeJS, and ExpressJS. React Native is another framework that I've been working with during the past few months. I'm also very knowledgeable in Git and GitHub, and I've used them for both solo and collaborated projects.</animated.p>
                <div className='skills-list'>
                    {
                        [["ReactJS", 90], ["Java", 60], ["NodeJS", 80], ["ExpressJS", 100], ["React Native", 95]].map((skill, index) => {
                            return (
                                <div className='skill' key={index} style={{display: "flex", flexDirection: "column" , width: "100%"}}>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: 'space-between'}}>
                                        <animated.p style={aboutmeProps}>{skill[0]}</animated.p>
                                        <p style={{color: colors.yellow}}>{skill[1]}%</p>
                                    </div>
                                    <div className='skill-bar' style={{width: "100%", height: '0.4rem', backgroundColor: "white"}}>
                                        <div className='skill-bar-fill' style={{width: `${skill[1]}%`, backgroundColor: colors.yellow, height: '100%'}}></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}