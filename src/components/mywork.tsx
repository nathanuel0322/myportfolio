import { projects } from "../projectarr";
import Button from "./buttons";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import "../assets/css/mywork.css";
import React, { useEffect, useState } from "react";

export default function MyWork() {
    const [ref, inView] = useInView({
        threshold: 0.125,
        triggerOnce: true,
    });

    const [debouncedInView, setDebouncedInView] = useState(inView);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedInView(inView);
        }, 100);

        return () => {
            clearTimeout(handler);
        };
    }, [inView]);

    const props = useSpring({
        opacity: debouncedInView ? 1 : 0,
    });
    const textprops = useSpring({
        transform: debouncedInView ? "translateY(0px)" : "translateY(100px)",
    });

    return (
        <animated.div id="my-work" ref={ref} style={props}>
            <p>
                MY
                <span> WO</span>
                RK
            </p>
            <animated.div style={textprops}>
                {projects.map((item, index) => {
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
