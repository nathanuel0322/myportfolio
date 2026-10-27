import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CloseIcon from '@mui/icons-material/Close';
import '../assets/css/sidenav.css';
import { IconButton } from '@mui/material';

export default function TemporaryDrawer({drawerstate, drawerfunc}: {
    drawerstate: boolean;
    drawerfunc: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <SwipeableDrawer
            anchor={'right'}
            open={drawerstate}
            onOpen={()=>{}}
            onClose={() => drawerfunc(false)}
        >
            <nav aria-label="Site sections">
                <div>
                    <IconButton onClick={() => drawerfunc(false)} sx={{p: 0}} aria-label="Close menu">
                        <CloseIcon fontSize='small' sx={{width: 75, height: 75, color: "white"}} />
                    </IconButton>
                </div>
                <div className='linkdiv'>
                    {
                        [{text: "FORTES", id: "fortes"}, {text: "EXPERIENCE", id: "experience-div"},
                            {text: "PROJECTS", id: "my-work"}, {text: "HOMELAB", id: "my-homelab"},
                            {text: "ABOUT ME", id: "aboutme"}, {text: "MY SKILLS", id: "skills"},
                            {text: "CONTACT ME", id: "contactme"}
                        ].map((item) => (
                            <a key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const target = document.getElementById(item.id);
                                    if (target) {
                                        window.scrollTo({top: target.getBoundingClientRect().top +
                                            window.scrollY - (window.innerHeight * 0.05), behavior: 'smooth'
                                        });
                                    }
                                    drawerfunc(false)
                                }}
                                id={item.id === "contactme" ? 'innerbutton' : undefined}
                                className={item.id === "contactme" ? "btn btn-md bold btn-primary-outline display-7" : undefined}
                            >
                                {item.text}
                            </a>
                        ))
                    }
                </div>
            </nav>
        </SwipeableDrawer>
    );
}
