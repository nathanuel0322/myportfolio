import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import {FiMenu} from 'react-icons/fi';
import '../assets/css/header.css';

export default function Header({drawerfunc}) {
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
                        <animated.img src={require("../assets/images/circlelogo.png")} alt="Logo" className='logo'
                            style={{ width: !transparent ? '3rem' : '3.75rem' }}
                        />
                    </span>
                    <a className="navbar-caption" href={"#header2-8"}>
                        Nathanuel's Portfolio
                    </a>
                </div>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav nav-dropdown">
                        {
                            [{text: "FORTES", id: "fortes"}, {text: "PROJECTS", id: "my-work"}, {text: "ABOUT ME", id: "aboutme-skills"}, 
                                {text: "MY SKILLS", id: "aboutme-skills"}
                            ].map((item, index) => {
                                return (
                                    <li className="nav-item" key={index}>
                                        <div className="nav-link link text-warning display-4" style={{color: transparent ? "#c1c1c1" : "darkslategray"}} 
                                            // href={`#${item.id}`}
                                            onClick={() => {
                                                window.scrollTo({top: document.getElementById(`${item.id}`).getBoundingClientRect().top 
                                                    + window.pageYOffset, behavior: 'smooth'
                                                });
                                                drawerfunc(false)
                                            }} 
                                        > 
                                            {item.text}
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="navbar-buttons section-btn">
                        <a className="btn btn-md btn-primary display-4" href="#contactme">
                            CONTACT ME
                        </a>
                    </div>
                </div>
                <button className='drawerbutton' onClick={() => drawerfunc(true)}><FiMenu /></button>
            </animated.nav>
        </section>
    );
}