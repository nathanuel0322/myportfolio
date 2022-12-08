import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import '../assets/css/header.css';
import Button from './buttons';

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
        <animated.nav className="navbar navbar-dropdown" style={navspring}>
            <div className="navbar-brand">
                <span className="navbar-logo">
                    <animated.img src={require("../assets/images/circlelogo.png")} alt="Logo" className='logo' style={{ width: !transparent ? '3rem' : '3.75rem' }} />
                </span>
                <button className="navbar-caption" onClick={() => {document.querySelector('#topblock').scrollIntoView({behavior: 'smooth'})}}>
                    Nathanuel's Portfolio
                </button>
            </div>
            <ul className="navbar-nav nav-dropdown">
                {
                    [{text: "FORTES", id: "fortes"}, {text: "PROJECTS", id: "my-work"}, {text: "ABOUT ME", id: "aboutme-skills"}, {text: "MY SKILLS", id: "aboutme-skills"}].map((item, index) => {
                        return (
                            <li className="nav-item" key={index}>
                                <button className="nav-link link text-warning" style={{backgroundColor: 'transparent', cursor: 'pointer', border: 'none', color: transparent ? "#c1c1c1" : "darkslategray"}} onClick={() => {
                                    document.querySelector(`#${item.id}`).scrollIntoView({behavior: 'smooth', block: 'center'})
                                    // window scroll to midpoint of element
                                        // const element = document.querySelector(`#${item.id}`);
                                        // const elementRect = element.getBoundingClientRect();
                                        // const absoluteElementTop = elementRect.top + window.pageYOffset;
                                        // const middle = absoluteElementTop - (window.innerHeight / 2);
                                        // // subtract 1 rem from middle to account for navbar height
                                        // window.scrollTo({top: middle - 48, behavior: 'smooth'});
                                    }}> 
                                    {item.text}
                                </button>
                            </li>
                        )
                    })
                }
                <Button href={'#contactme'} text={'CONTACT ME'} external={false} />
            </ul>
        </animated.nav>
    );
}