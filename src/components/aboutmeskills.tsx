import "../assets/css/aboutmeskills.css";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import GithubIcon from "../assets/icons/githubicon.svg?react";
import LinkedinImage from "../assets/icons/linkedin.png";
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
        useSpring({
            transform: aboutinView ? "translateY(0px)" : "translateY(100px)",
            config: { duration: 600 },
        }),
        useSpring({
            transform: aboutinView ? "translateY(0px)" : "translateY(100px)",
            config: { duration: 900 },
        }),
        useSpring({
            transform: skillinView ? "translateY(0px)" : "translateY(100px)",
            config: { duration: 600 },
        }),
        useSpring({
            transform: skillinView ? "translateY(0px)" : "translateY(100px)",
            config: { duration: 900 },
        }),
    ];

    return (
        <div className="aboutme-skills !pt-0" id="aboutme-skills">
            <animated.div
                className="gap-2 bg-custom_yellow text-black flex flex-col items-start justify-center"
                id="aboutme"
                ref={aboutref}
            >
                <animated.h1 style={props[0]}>
                    ABOUT <span className="text-black">ME</span>
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
                    <a href="https://www.linkedin.com/in/nathanueldixon0322/" target="_blank" rel="noreferrer noopener">
                        <img src={LinkedinImage} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/nathanuel0322" target="_blank" rel="noreferrer noopener" title="GitHub" aria-label="GitHub">
                        <GithubIcon />
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
                    I have gotten hands on with various languages and frameworks, but ReactJS and TypeScript are my
                    strengths when it comes to frontend development, and I build cross-platform mobile apps with React
                    Native and Expo. On the backend I work with NodeJS, ExpressJS, PostgreSQL, Supabase, and Firebase,
                    and I deploy to Cloudflare and Vercel. I also run a five-node Proxmox homelab, and I'm very
                    knowledgeable in Git and GitHub, which I've used for both solo and collaborative projects.
                </animated.p>
            </animated.div>
        </div>
    );
}
