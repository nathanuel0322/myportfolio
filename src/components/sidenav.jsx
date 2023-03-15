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
                        <CloseIcon fontSize='small' sx={{width: 1/4, height: 1/4, color: "white"}} />
                    </IconButton>
                </div>
                <div className='linkdiv'>
                    {
                        [{text: "FORTES", id: "fortes"}, {text: "PROJECTS", id: "my-work"}, {text: "ABOUT ME", id: "aboutme-skills"}, 
                            {text: "MY SKILLS", id: "aboutme-skills"}, {text: "CONTACT ME", id: "contactme"}
                        ].map((item, index) => (
                            <div key={index} onClick={() => {
                                    console.log("a pressed...");
                                    const curid = document.getElementById(`${item.id}`)
                                    // push down curid 5 rem uusing getBoundingClientRect()
                                    const curidrect = curid.getBoundingClientRect();
                                    console.log(curidrect);
                                    window.scrollTo({top: curidrect.top + window.pageYOffset - (item.id === "my-work" ? 128 : 80), behavior: 'smooth'});
                                    drawerfunc(false)
                                }} 
                                // href={`#${item.id}`}
                                id={index === 4 && 'innerbutton'}
                                className={index === 4 && "btn btn-md bold btn-primary-outline display-7"}
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