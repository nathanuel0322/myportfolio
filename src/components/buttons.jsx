import '../assets/css/buttons.css';

export default function Button({text, href, external}) {
    const isinprogress = text === "In Progress";
    return (
        <button className="buttoncomp"
            style={{ cursor: isinprogress ? 'default' : 'pointer' }}
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