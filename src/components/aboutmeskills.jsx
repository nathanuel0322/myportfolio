import '../assets/css/aboutmeskills.css'
import { colors } from '../GlobalStyles'

export default function AboutMeSkills() {
    return (
        <div className='aboutme-skills'>
            <div className='aboutme'>
                <h1>ABOUT <span style={{color: "black"}}>ME</span></h1>
                <p>Hi! I'm Nathanuel, an undergraduate student at New York University studying Computer Science. I'm a frontend developer with experience in React, HTML, CSS, and JavaScript. I'm currently looking for an internship position as a software engineer.</p>
                <p> I tend to be a perfectionist when I'm programming, where small differences between mockups and the final product really bother me. Moreover, I'm a fast learner who aims to simultaneously learn and improve on established skills.</p>
            </div>
            <div className='skills'>
                <h1>MY <span style={{color: colors.yellow}}>SKILLS</span></h1>
                <p>

                </p>
            </div>
        </div>
    )
}