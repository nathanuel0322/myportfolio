import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { FiMenu } from "react-icons/fi";
import circlelogo from "../assets/images/circlelogo.png";
import "../assets/css/header.css";

export default function Header({ drawerfunc }: { drawerfunc: React.Dispatch<React.SetStateAction<boolean>> }) {
    // if page position is at the top, then the header is transparent, otherwise it is not
    const [transparent, setTransparent] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY === 0) {
                setTransparent(true);
            } else {
                setTransparent(false);
            }
        });
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
                            alt="Logo"
                            className="logo"
                            style={{ width: !transparent ? "3rem" : "3.75rem" }}
                        />
                    </span>
                    <div
                        className="navbar-caption"
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    >
                        Nathanuel's Portfolio
                    </div>
                </div>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav nav-dropdown">
                        {[
                            { text: "FORTES", id: "fortes" },
                            { text: "PROJECTS", id: "my-work" },
                            { text: "ABOUT ME", id: "aboutme" },
                            { text: "MY SKILLS", id: "skills" },
                        ].map((item, index) => {
                            return (
                                <li className="nav-item" key={index}>
                                    <div
                                        className={`nav-link link text-warning display-4 ${
                                            transparent ? "text-[#c1c1c1]" : "text-[darkslategray]"
                                        }`}
                                        onClick={() => {
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
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <div
                        id="contactmebutton"
                        className="section-btn btn btn-md btn-primary display-4"
                        onClick={() => {
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
                    </div>
                </div>
                <button className="drawerbutton" onClick={() => drawerfunc(true)} type="button" title="Menu">
                    <FiMenu />
                </button>
            </animated.nav>
        </section>
    );
}
