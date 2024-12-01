import { projects } from "../projectarr";
import Button from "./Buttons";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import "../assets/css/mywork.css";
import { colors } from "../GlobalStyles";
import WidgieHome from "../assets/images/widgie-home.webp";
import WidgiePlans from "../assets/images/widgie-plans.webp";
import WidgieCustomize from "../assets/images/widgie-customize.webp";
import WidgieAnimation from "../assets/gifs/widgie-animation.gif";

export default function MyWork() {
    const [ref, inView] = useInView({
        // threshold: 0.125,
        threshold: 0.05,
        triggerOnce: true,
    });

    const props = useSpring({
        opacity: inView ? 1 : 0,
    });
    const textprops = useSpring({
        transform: inView ? "translateY(0px)" : "translateY(100px)",
    });

    const widgie_innerstrs = projects[0].description.split(".");

    return (
        <animated.div id="my-work" ref={ref} style={props}>
            <p className="section-title">
                MY&nbsp;
                <span>WO</span>
                RK
            </p>
            <div
                id="new-project"
                className="text-black my-work-title p-5 flex flex-col rounded-xl mx-[5vw] mt-8"
                style={{ backgroundColor: colors.yellow }}
            >
                <p id="new-project-p" className="text-2xl font-bold">
                    NEW PROJECT 🎉
                </p>
                <div id="new-project-inner" className="flex flex-row justify-between items-center gap-[2vw]">
                    <div id="new-project-item" className="my-work-item w-[30%] bg-black p-4 text-white rounded-xl">
                        <div>{projects[0].picture && <img src={projects[0].picture} alt={projects[0].title} />}</div>
                        <div className="my-work-item-title">{projects[0].title}</div>
                        <div></div>
                        <ul className="my-work-item-description">
                            {widgie_innerstrs.map((item, index) => {
                                return (
                                    <li key={index}>
                                        {/* find "|" within the string, if any */}
                                        {item.split("|").map((subitem, subindex) => {
                                            if (subindex % 2 === 0) {
                                                return <span key={subindex}>{subitem}</span>;
                                            }
                                            return (
                                                <span key={subindex} className="highlighted">
                                                    {subitem}
                                                </span>
                                            );
                                        })}
                                    </li>
                                );
                            })}
                        </ul>
                        <Button
                            href={projects[0].link1}
                            text={projects[0].inprogress ? "In Progress" : "View Project"}
                            external={true}
                        />
                        {projects[0].sourceCode && (
                            <button
                                className="srccode buttoncomp"
                                onClick={() => window.open(projects[0].sourceCode, "_blank")}
                            >
                                View Source Code
                            </button>
                        )}
                    </div>
                    <div id="new-project-img-grid" className="grid grid-cols-2 gap-4 h-fit w-[70%] items-center">
                        <img src={WidgieHome} alt="Widgie Home" />
                        <img src={WidgiePlans} alt="Widgie Plans" />
                        <img src={WidgieCustomize} alt="Widgie Customize" />
                        <img src={WidgieAnimation} alt="Widgie Animation" />
                    </div>
                </div>
            </div>
            <animated.div style={textprops} id="my-work-items">
                {projects.slice(1).map((item, index) => {
                    const innerstrs = item.description.split(".");
                    return (
                        <div key={index} className="my-work-item">
                            <div>{item.picture && <img src={item.picture} alt={item.title} />}</div>
                            <div className="my-work-item-title">{item.title}</div>
                            <div></div>
                            <ul className="my-work-item-description">
                                {innerstrs.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            {/* find "|" within the string, if any */}
                                            {item.split("|").map((subitem, subindex) => {
                                                if (subindex % 2 === 0) {
                                                    return <span key={subindex}>{subitem}</span>;
                                                }
                                                return (
                                                    <span key={subindex} className="highlighted">
                                                        {subitem}
                                                    </span>
                                                );
                                            })}
                                        </li>
                                    );
                                })}
                            </ul>
                            <Button
                                href={item.link1}
                                text={item.inprogress ? "In Progress" : "View Project"}
                                external={true}
                            />
                            {item.sourceCode && (
                                <button
                                    className="srccode buttoncomp"
                                    onClick={() => window.open(item.sourceCode, "_blank")}
                                >
                                    View Source Code
                                </button>
                            )}
                        </div>
                    );
                })}
            </animated.div>
        </animated.div>
    );
}
