import { experiences } from "../projectarr";
import "../assets/css/experience.css";

export default function Experience() {
    return (
        <div className="bg-custom_yellow text-black flex flex-col items-center py-[10vh] gap-3" id="experience-div">
            <p className="section-title font-medium">
                EXP
                <span>ERIE</span>
                NCE
            </p>
            {experiences.map((experience, index) => {
                const innerstrs = experience.description.split(".");
                return (
                    <div key={index} className="experience flex justify-center items-center gap-4 p-4 font-semibold">
                        <div className="w-1/4 flex flex-col items-center justify-center">
                            <div>
                                {experience.picture && (
                                    <img
                                        src={experience.picture}
                                        alt={experience.title}
                                        className="w-full rounded-[10px]"
                                    />
                                )}
                            </div>
                            <div className="experience-title text-2xl font-bold">{experience.title}</div>
                            <p className="text-xl">{experience.role}</p>
                            <p className="experience-subtitle text-xl">{experience.location}</p>
                            <p className="text-xl">{experience.range}</p>
                        </div>
                        <ul className="w-3/4">
                            {innerstrs.map((item, index) => {
                                return (
                                    <li key={index} className="!font-semibold">
                                        {/* find "|" within the string, if any */}
                                        {item.split("|").map((subitem, subindex) => {
                                            if (subindex % 2 === 0) {
                                                return <span key={subindex}>{subitem}</span>;
                                            }
                                            return (
                                                <span key={subindex} className="highlighted-white">
                                                    {subitem}
                                                </span>
                                            );
                                        })}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}
