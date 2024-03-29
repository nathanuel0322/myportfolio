import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CloseIcon from '@mui/icons-material/Close';
import '../assets/css/sidenav.css';
import { IconButton } from '@mui/material';

export default function TemporaryDrawer({drawerstate, drawerfunc}) {
    return (
        <SwipeableDrawer
            anchor={'right'}
            open={drawerstate}
            onOpen={()=>{}}
            onClose={() => drawerfunc(false)}
        >
            <div>
                <div>
                    <IconButton onClick={() => drawerfunc(false)} sx={{p: 0}}>
                        <CloseIcon fontSize='small' sx={{width: 75, height: 75, color: "white"}} />
                    </IconButton>
                </div>
                <div className='linkdiv'>
                    {
                        [{text: "FORTES", id: "fortes"}, {text: "PROJECTS", id: "my-work"}, {text: "ABOUT ME", id: "aboutme"}, 
                            {text: "MY SKILLS", id: "skills"}, {text: "CONTACT ME", id: "contactme"}
                        ].map((item, index) => (
                            <div key={index} 
                                onClick={() => {
                                    window.scrollTo({top: document.getElementById(`${item.id}`).getBoundingClientRect().top + 
                                        (window.pageYOffset) - (window.innerHeight * 0.05), behavior: 'smooth'
                                    });
                                    drawerfunc(false)
                                }} 
                                id={index === 4 ? 'innerbutton' : undefined}
                                className={index === 4 ? "btn btn-md bold btn-primary-outline display-7" : undefined}
                            >
                                {item.text}
                            </div>
                        ))
                    }
                </div>
            </div>
        </SwipeableDrawer>
    );
}