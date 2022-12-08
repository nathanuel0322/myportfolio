import { useState } from 'react'
import '../assets/css/footer.css'
import { colors } from '../GlobalStyles'

export default function Footer() {
    const [buttonhover, setButtonHover] = useState(false)
    return (
        <div className='footer' style={{backgroundColor: '#232323', color: 'white', padding: '2rem 0', display: 'flex', flexDirection: 'row'}}>
            <p style={{color: colors.yellow, fontSize: '1.5rem'}}>Nathanuel's Portfolio</p>
            <div className='footericons'>
                <a className='icon' href='https://www.linkedin.com/in/nathanueldixon0322/' target='_blank' rel='noreferrer' style={{backgroundColor: buttonhover ? colors.yellow : 'transparent', borderRadius: '50%'}}
                    onMouseEnter={() => setButtonHover(true)}
                    onMouseLeave={() => setButtonHover(false)}
                >
                    <img src={require('../assets/icons/linkedin.png')} alt='LinkedIn' style={{width: '2rem'}} />
                </a>
            </div>
        </div>
    )
}