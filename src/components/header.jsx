import '../assets/css/header.css';
import Button from './buttons';

export default function Header() {
    return (
        <nav class="navbar navbar-dropdown">
            <div class="navbar-brand">
                <span class="navbar-logo">
                    <img src={require("../assets/images/circlelogo.png")} alt="Logo" className='logo'/>
                </span>
                <span class="navbar-caption">
                    Nathanuel's Portfolio
                </span>
            </div>
            <ul class="navbar-nav nav-dropdown">
                <li class="nav-item">
                    <a class="nav-link link text-warning" href="https://mobiri.se" data-app-selector=".nav-link,.dropdown-item" data-app-placeholder="Type Text">FORTES</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link link text-warning" href="https://mobiri.se" data-app-selector=".nav-link,.dropdown-item" data-app-placeholder="Type Text">PROJECTS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link link text-warning" href="https://mobiri.se" data-app-selector=".nav-link,.dropdown-item" data-app-placeholder="Type Text">ABOUT ME</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link link text-warning" href="https://mobiri.se" data-app-selector=".nav-link,.dropdown-item" data-app-placeholder="Type Text">MY SKILLS</a>
                </li>
                <Button href={''} text={'CONTACT ME'} />
            </ul>
        </nav>
    );
}