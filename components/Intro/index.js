import skills from "../../data/skills";
import IntroCards from "./IntroCards";
import Heading from "../Heading";
import SubHeading from "../SubHeading";
import Techs from "./Techs";
import { motion } from "framer-motion";

export default function Intro() {
    const titleVariant = {
        inView: { y: ["10%", "0%", "10%", "0%"], opacity: [0, 0.5, 1] },
    };

    return (
        <div id="about" className="min-h-[100vh] pt-32 lmd:pt-16">
            <div className="max-w-[80%] lmd:max-w-[80%] mx-auto">
                <div className="  ">
                    <div>
                        <motion.div
                            variants={titleVariant}
                            whileInView={titleVariant.inView}
                        >
                            <SubHeading title={"WHAT I DO"} />
                            <Heading heading={"My Skills"} />
                        </motion.div>

                        <motion.div className=" flex flex-col sm:flex-row items-center justify-between ">
                            <IntroCards data={skills} />
                        </motion.div>
                    </div>

                    <div data-aos="zoom-in-up">
                        <div className="pt-16 w-full">
                            <div>
                                <SubHeading title={"WHO AM I?"} />
                                <Heading heading={"About me"} />
                            </div>

                            <div className="mt-8 lmd:flex justify-between items-start ">
                                <p className="lmd:max-w-[40%] text-[1rem]">
                                    Hello! I'm{" "}
                                    <span className="text-teal-300">
                                        Taofiq Sulayman
                                    </span>
                                    , a dedicated and innovative Fullstack
                                    JavaScript Developer with{" "}
                                    <span className="text-teal-300">
                                        over 2 years
                                    </span>{" "}
                                    of experience building dynamic, scalable,
                                    and user-centric websites. I live and
                                    breathe{" "}
                                    <span className="text-teal-300">code</span>,
                                    with a passion for{" "}
                                    <span className="text-teal-300">
                                        open source
                                    </span>{" "}
                                    and the ever-evolving web platform.
                                    <br />
                                    Beyond my professional role, I thrive on
                                    contributing to open source projects,
                                    constantly expanding my knowledge and honing
                                    my skills. This journey not only fuels my
                                    growth as a developer but also allows me to
                                    give back to the community.
                                    <br />
                                    {/* I'm also an avid writer, sharing insights
                                    and experiences on web development through
                                    my blog. Let's create something amazing
                                    together! */}
                                </p>
                                <div className="mt-10 flex items-center justify-start  flex-wrap lmd:mt-0 lmd:max-w-[40%] ">
                                    <Techs />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
