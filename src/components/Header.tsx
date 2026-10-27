import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { FiMenu } from "react-icons/fi";
import circlelogo from "../assets/images/circlelogo.png";
import "../assets/css/header.css";

export default function Header({ drawerfunc }: { drawerfunc: React.Dispatch<React.SetStateAction<boolean>> }) {
    // if page position is at the top, then the header is transparent, otherwise it is not
    const [transparent, setTransparent] = useState(true);

    useEffect(() => {
        const onScroll = () => setTransparent(window.scrollY === 0);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const navspring = useSpring({ backgroundColor: transparent ? "transparent" : "white" });

    return (
        <section className="menu cid-rzMrgNeUFf" id="menu2-7">
            <animated.nav
                className={`navbar navbar-dropdown navbar-fixed-top navbar-expand-lg ${!transparent && "navbar-short"}`}
                style={navspring}
            >
                <div className="navbar-brand">
                    <span className="navbar-logo">
                        <animated.img
                            src={circlelogo}
                            alt=""
                            className="logo"
                            style={{ width: !transparent ? "3rem" : "3.75rem" }}
                        />
                    </span>
                    <button
                        type="button"
                        className="navbar-caption"
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    >
                        Nathanuel's Portfolio
                    </button>
                </div>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav nav-dropdown">
                        {[
                            { text: "FORTES", id: "fortes" },
                            { text: "EXPERIENCE", id: "experience-div" },
                            { text: "PROJECTS", id: "my-work" },
                            { text: "HOMELAB", id: "my-homelab" },
                            { text: "ABOUT ME", id: "aboutme" },
                            { text: "MY SKILLS", id: "skills" },
                        ].map((item, index) => {
                            return (
                                <li className="nav-item" key={index}>
                                    <a
                                        href={`#${item.id}`}
                                        className={`nav-link link text-warning display-4 ${
                                            transparent ? "text-[#c1c1c1]" : "text-[darkslategray]"
                                        }`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const itemdiv = document.getElementById(`${item.id}`);
                                            if (itemdiv)
                                                window.scrollTo({
                                                    top:
                                                        itemdiv.getBoundingClientRect().top +
                                                        window.scrollY -
                                                        (item.id === "aboutme" || item.id === "skills"
                                                            ? window.innerHeight * 0.15
                                                            : 0),
                                                    behavior: "smooth",
                                                });
                                            drawerfunc(false);
                                        }}
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <a
                        href="#contactme"
                        id="contactmebutton"
                        className="section-btn btn btn-md btn-primary display-4"
                        onClick={(e) => {
                            e.preventDefault();
                            const contactmediv = document.getElementById("contactme");
                            if (contactmediv) {
                                window.scrollTo({
                                    top:
                                        contactmediv.getBoundingClientRect().top +
                                        window.scrollY -
                                        window.innerHeight * 0.05,
                                    behavior: "smooth",
                                });
                            }
                        }}
                    >
                        CONTACT ME
                    </a>
                </div>
                <button className="drawerbutton" onClick={() => drawerfunc(true)} type="button" title="Menu" aria-label="Open menu">
                    <FiMenu />
                </button>
            </animated.nav>
        </section>
    );
}
