import { colors } from "../GlobalStyles";
import '../assets/css/buttons.css';
import { useState } from "react";

export default function Button({text, href}) {
    const [instyle, setInstyle] = useState({backgroundColor: colors.yellow});
    return (
        <button className="buttoncomp" style={instyle}
            onMouseOver={() => {setInstyle({backgroundColor: '#C38000'})}}
            onMouseOut={() => {setInstyle({backgroundColor: colors.yellow})}}
            onClick={() => {document.querySelector(href).scrollIntoView({behavior: 'smooth'})}}
        >
            {text}
        </button>
    );
}