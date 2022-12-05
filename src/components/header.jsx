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
                <li class="nav-item">
                    <button className="nav-link link text-warning" style={{backgroundColor: 'transparent', cursor: 'pointer', border: 'none'}} onClick={() => {document.querySelector("#fortes").scrollIntoView({behavior: 'smooth', block: 'center'})}}>
                        FORTES
                    </button>
                </li>
                <li class="nav-item">
                    <button className="nav-link link text-warning" style={{backgroundColor: 'transparent', cursor: 'pointer', border: 'none'}} onClick={() => {document.querySelector("#my-work").scrollIntoView({behavior: 'smooth', block: 'center'})}}>
                        PROJECTS
                    </button>
                </li>
                <li class="nav-item">
                    <a class="nav-link link text-warning" href="https://mobiri.se">ABOUT ME</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link link text-warning" href="https://mobiri.se">MY SKILLS</a>
                </li>
                <Button href={''} text={'CONTACT ME'} />
            </ul>
        </nav>
    );
}