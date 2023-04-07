import '../assets/css/footer.css'
import {ReactComponent as Github} from '../assets/icons/githubicon.svg'
import Resume from "../assets/files/MyResume.pdf"

export default function Footer() {
    return (
        <div className='footer'>
            <p>Nathanuel's Portfolio</p>
            <div className='footericons'>
                <a href='https://www.linkedin.com/in/nathanueldixon0322/' target='_blank' rel='noreferrer' id="linkedina">
                    <img src={require('../assets/icons/linkedin.png')} alt='LinkedIn' />
                </a>
                <a href='https://github.com/nathanuel0322' target='_blank' rel='noreferrer' id="githuba">
                    <Github className='gitfooter'/>
                </a>
                <a href={`${Resume}#zoom=62`} without rel='noreferrer' target='_blank' id="bottomresume">
                    View Resume
                </a>
            </div>
        </div>
    )
}