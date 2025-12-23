import "../assets/css/buttons.css";

export default function Button({
    text,
    href,
    external,
    dark,
}: {
    text: string;
    href: string | undefined;
    external: boolean;
    dark?: boolean;
}) {
    const isinprogress = text === "In Progress";
    return (
        <button
            className={`buttoncomp ${isinprogress ? "cursor-default" : "cursor-pointer"} ${
                dark ? "!bg-black !text-white" : ""
            }`}
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
