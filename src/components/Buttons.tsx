import "../assets/css/buttons.css";

export default function Button({
    text,
    href,
    external,
}: {
    text: string;
    href: string | undefined;
    external: boolean;
}) {
    const isinprogress = text === "In Progress";
    return (
        <button
            className={`buttoncomp ${isinprogress ? "cursor-default" : "cursor-pointer"}`}
            type="button"
            onClick={() => {
                if (!isinprogress && href) {
                    if (external) window.open(href, "_blank");
                    else document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            }}
        >
            {text}
        </button>
    );
}
