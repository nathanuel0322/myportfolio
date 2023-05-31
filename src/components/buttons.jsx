/* eslint-disable react/prop-types */
import { colors } from "../GlobalStyles";
import '../assets/css/buttons.css';
import { useState } from "react";

export default function Button({text, href, external}) {
    const isinprogress = text === "In Progress";
    const [instyle, setInstyle] = useState({backgroundColor: !isinprogress ? colors.yellow : '#C38000'});
    return (
        <button className="buttoncomp" style={Object.assign({}, instyle, {border: 'none', cursor: isinprogress ? 'default' : 'pointer',})}
            onMouseOver={() => {if (!isinprogress){setInstyle({backgroundColor: '#C38000'})}}}
            onMouseOut={() => {if (!isinprogress){setInstyle({backgroundColor: colors.yellow})}}}
            onClick={() => {
                if (!isinprogress){
                    if (external) {
                        window.open(href, '_blank');
                    } else {
                        document.querySelector(href).scrollIntoView({behavior: 'smooth', block: 'center'})
                    }
                }
            }}
        >
            {text}
        </button>
    );
}