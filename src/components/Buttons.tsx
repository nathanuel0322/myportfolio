import "../assets/css/buttons.css";

export default function Button({
    text,
    href,
    dark,
    className = "",
}: {
    text: string;
    href: string | undefined;
    dark?: boolean;
    className?: string;
}) {
    const classes = `buttoncomp ${dark ? "!bg-black !text-white" : ""} ${className}`;
    // "In Progress" (or a missing link) is a status label, not a control
    if (text === "In Progress" || !href) {
        return <span className={`${classes} cursor-default`}>{text}</span>;
    }
    return (
        <a className={`${classes} cursor-pointer`} href={href} target="_blank" rel="noreferrer noopener">
            {text}
        </a>
    );
}
