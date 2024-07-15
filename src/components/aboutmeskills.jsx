import "../assets/css/aboutmeskills.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { ReactComponent as Github } from "../assets/icons/githubicon.svg";
import linkedin from "../assets/icons/linkedin.png";
import Resume from "../assets/files/MyResume.pdf";

export default function AboutMeSkills() {
    const [aboutref, aboutinView] = useInView({
        threshold: window.innerWidth < 768 ? 0.2 : 0.5,
        triggerOnce: true,
    });

    const [skillref, skillinView] = useInView({
        threshold: window.innerWidth < 768 ? 0.2 : 0.5,
        triggerOnce: true,
    });

    const props = [
        useSpring({ opacity: aboutinView ? 1 : 0 }),
        useSpring({ opacity: skillinView ? 1 : 0 }),
        useSpring({ transform: aboutinView ? "translateY(0px)" : "translateY(100px)" }),
        useSpring({ transform: aboutinView ? "translateY(0px)" : "translateY(100px)", config: { duration: 600 } }),
        useSpring({ transform: aboutinView ? "translateY(0px)" : "translateY(100px)", config: { duration: 900 } }),
        useSpring({ transform: skillinView ? "translateY(0px)" : "translateY(100px)", config: { duration: 600 } }),
        useSpring({ transform: skillinView ? "translateY(0px)" : "translateY(100px)", config: { duration: 900 } }),
    ];

    return (
        <div className="aboutme-skills" id="aboutme-skills">
            <animated.div className="aboutme" id="aboutme" ref={aboutref}>
                <animated.h1 style={props[0]}>
                    ABOUT <span style={{ color: "black" }}>ME</span>
                </animated.h1>
                <animated.p style={{ ...props[2], ...props[0] }}>
                    Hi! I'm Nathanuel, a graduate from New York University with a Bachelor's Degree in Computer Science.
                    I'm a Full Stack developer with experience in React, React Native, HTML, CSS, JavaScript, Python,
                    Java, and SQL. I'm currently looking for a full time position as a software engineer or full stack
                    developer.
                </animated.p>
                <animated.p style={{ ...props[3], ...props[0] }}>
                    {" "}
                    I tend to be a perfectionist when I'm programming, where small differences between mockups and the
                    final product really bother me. Moreover, I'm a fast learner who aims to simultaneously learn and
                    improve on established skills.
                </animated.p>
                <animated.div style={props[4]}>
                    <a href="https://www.linkedin.com/in/nathanueldixon0322/" target="_blank" rel="noreferrer">
                        <img src={linkedin} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/nathanuel0322" target="_blank" rel="noreferrer">
                        <Github />
                    </a>
                    <a href={`${Resume}#zoom=25`} rel="noreferrer" target="_blank" id="resumebutton">
                        View Resume
                    </a>
                </animated.div>
            </animated.div>
            <animated.div className="skills" id="skills" ref={skillref}>
                <animated.h1 style={props[1]}>
                    MY <span>SKILLS</span>
                </animated.h1>
                <animated.p style={{ ...props[5], ...props[1] }}>
                    I have gotten hands on with various languages and frameworks, but I'd say that ReactJS and
                    Javascript are my strengths when it comes to frontend development. I'm also familiar with HTML, CSS,
                    Java, NodeJS, and ExpressJS. React Native is another framework that I've been working with during
                    the past few months. I'm also very knowledgeable in Git and GitHub, and I've used them for both solo
                    and collaborated projects.
                </animated.p>
            </animated.div>
        </div>
    );
}
