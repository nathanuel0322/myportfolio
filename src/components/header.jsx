import { useState, useEffect } from 'react';
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

    return (
        <nav className="navbar navbar-dropdown" style={{backgroundColor: transparent ? 'transparent' : 'white'}}>
            <div class="navbar-brand">
                <span class="navbar-logo">
                    <img src={require("../assets/images/circlelogo.png")} alt="Logo" className='logo' style={{width: !transparent ? '3rem' : '3.75rem'}} />
                </span>
                <button className="navbar-caption" onClick={() => {document.querySelector('#topblock').scrollIntoView({behavior: 'smooth'})}}>
                    Nathanuel's Portfolio
                </button>
            </div>
            <ul class="navbar-nav nav-dropdown">
                {
                    [{text: "FORTES", id: "fortes"}, {text: "PROJECTS", id: "my-work"}, {text: "ABOUT ME", id: "aboutme-skills"}, {text: "MY SKILLS", id: "aboutme-skills"}].map((item, index) => {
                        return (
                            <li class="nav-item" key={index}>
                                <button className="nav-link link text-warning" style={{backgroundColor: 'transparent', cursor: 'pointer', border: 'none', color: transparent ? "#c1c1c1" : "darkslategray"}} onClick={() => {document.querySelector(`#${item.id}`).scrollIntoView({behavior: 'smooth', block: 'center'})}}>
                                    {item.text}
                                </button>
                            </li>
                        )
                    })
                }
                <Button href={''} text={'CONTACT ME'} />
            </ul>
        </nav>
    );
}