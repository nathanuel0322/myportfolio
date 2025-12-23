import Button from "./Buttons";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import "../assets/css/mywork.css";
import { homelabProjects } from "../projectarr";

export default function MyHomelab() {
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

    return (
        <animated.div id="my-homelab" ref={ref} style={props} className="!bg-custom_yellow !text-black">
            <p className="section-title">
                MY H<span>OME</span>
                LAB
            </p>
            <animated.div style={textprops} id="my-homelab-items">
                {homelabProjects.map((item, index) => {
                    const innerstrs = item.description.split(".");
                    return (
                        <div key={index} className="my-homelab-item">
                            <div>{item.picture && <img src={item.picture} alt={item.title} />}</div>
                            <div className="my-homelab-item-title">{item.title}</div>
                            <div></div>
                            <ul className="my-homelab-item-description">
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
                            {item.link1 && (
                                <Button
                                    href={item.link1}
                                    text={item.inprogress ? "In Progress" : "View Project"}
                                    external={true}
                                    dark={true}
                                />
                            )}
                            {item.sourceCode && (
                                <button
                                    type="button"
                                    className="srccode buttoncomp !bg-black"
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
