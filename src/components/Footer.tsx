import "../assets/css/footer.css";
import GithubIcon from "../assets/icons/githubicon.svg?react";
import Resume from "../assets/files/MyResume.pdf";
import linkedin from "../assets/icons/linkedin.png";

export default function Footer() {
    return (
        <div className="footer">
            <p>Nathanuel's Portfolio</p>
            <div className="footericons">
                <a
                    href="https://www.linkedin.com/in/nathanueldixon0322/"
                    target="_blank"
                    rel="noreferrer noopener"
                    id="linkedina"
                >
                    <img src={linkedin} alt="LinkedIn" />
                </a>
                <a
                    href="https://github.com/nathanuel0322"
                    target="_blank"
                    rel="noreferrer noopener"
                    id="githuba"
                    title="GitHub"
                >
                    <GithubIcon className="gitfooter" />
                </a>
                <a href={`${Resume}#zoom=60`} rel="noreferrer" target="_blank" id="bottomresume">
                    View Resume
                </a>
            </div>
        </div>
    );
}
