import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import '../assets/css/header.css';

export default function Header() {
    // if page position is at the top, then the header is transparent, otherwise it is not
    const [transparent, setTransparent] = useState(true);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY === 0) {
                setTransparent(true);
            } else {
                setTransparent(false);
            }
        });
    }, []);
    const navspring = useSpring({ backgroundColor: transparent ? 'transparent' : 'white'})

    return (
        <section className="menu cid-rzMrgNeUFf" id="menu2-7">
            <animated.nav className={`navbar navbar-dropdown navbar-fixed-top navbar-expand-lg ${!transparent && 'navbar-short'}`} style={navspring}>
                <div className="navbar-brand">
                    <span className="navbar-logo">
                        <animated.img src={require("../assets/images/circlelogo.png")} alt="Logo" className='logo' style={{ width: !transparent ? '3rem' : '3.75rem' }} />
                    </span>
                    <button className="navbar-caption" onClick={() => {document.querySelector('#topblock').scrollIntoView({behavior: 'smooth'})}}>
                        Nathanuel's Portfolio
                    </button>
                </div>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav nav-dropdown">
                        {
                            [{text: "FORTES", id: "fortes"}, {text: "PROJECTS", id: "my-work"}, {text: "ABOUT ME", id: "aboutme-skills"}, 
                                {text: "MY SKILLS", id: "aboutme-skills"}
                            ].map((item, index) => {
                                return (
                                    <li className="nav-item" key={index}>
                                        {/* <a class="nav-link link text-warning display-4" href="#"> */}
                                        <a className="nav-link link text-warning display-4" style={{color: transparent ? "#c1c1c1" : "darkslategray"}} 
                                            href={`#${item.id}`}
                                        // onClick={() => {
                                            // if (isNaN(item.id)) {
                                            // const yOffset = item.id === "fortes" ? -300 : item.id === "my-work" ? -150 : item.id === "aboutme-skills" ? -100 : 0;
                                            // const element = document.getElementById(item.id);
                                            // const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                            // window.scrollTo({top: y, behavior: 'smooth'});
                                            // }}
                                        > 
                                            {item.text}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div class="navbar-buttons section-btn">
                        <a class="btn btn-md btn-primary display-4" href="#contactme">
                            CONTACT ME
                        </a>
                    </div>
                </div>
            </animated.nav>
        </section>
    );
}