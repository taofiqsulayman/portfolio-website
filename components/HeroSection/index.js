import { useState } from "react";
import ResumeViewer from "./ResumeViewer";
import Image from "next/image";
import SubHeading from "../SubHeading";
import { motion } from "framer-motion";
import {
    containerVariant,
    imageVariant,
    childVariant,
    buttonVariant,
} from "./motion";

const Hero = ({ children }) => {
    const [resumeActive, setResumeActive] = useState(false);

    function openResume() {
        setResumeActive(!resumeActive);
    }

    return (
        <>
            <div
                className={`max-w-[80%] sm:max-w-[70%] md:max-w-[80%] relative mx-auto pt-32 lmd:pt-16 min-h-[100vh] md:min-h-[70vh] lmd:min-h-[100vh] flex items-center space-y-14 md:flex-row lmd:max-w-[80%] flex-col gap-2`}
            >
                <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    animate="visible"
                    className="relative md:max-w-[60%]"
                >
                    <div className="">
                        <div>
                            <SubHeading title={"Introduction"} />
                            <motion.div
                                transition={{ duration: 0.5 }}
                                variants={childVariant}
                                className="mt-4"
                                whileInView={{
                                    y: ["30%", "0%"],
                                    opacity: [0, 0.5, 1],
                                }}
                            >
                                <h1 className={` text-[2rem] font-bold`}>
                                    Hi, <br /> I'm{" "}
                                    <span className="text-teal-300">
                                        Taofiq Sulayman
                                    </span>
                                    .
                                </h1>
                            </motion.div>
                        </div>
                        <motion.div
                            transition={{ duration: 2 }}
                            variants={childVariant}
                            whileInView={{
                                y: ["30%", "0%"],
                                opacity: [0, 0.5, 1],
                            }}
                            className="text-[1rem] lmd:max-w-[60%] mt-4"
                        >
                            I am passionate about creating beautiful and
                            functional web applications. I am a fullstack
                            developer with experience in building web
                            applications using modern technologies. I am a fast
                            learner and I am always eager to learn new
                            technologies.
                        </motion.div>

                        <motion.div
                            transition={{ duration: 2 }}
                            variants={childVariant}
                            whileInView={{
                                x: ["60%", "0%"],
                                opacity: [0, 0.2, 0.3, 0.5, 0.6, 0.9, 1],
                            }}
                            className="text-[1.2rem] mt-4 text-teal-300"
                        >
                            Building the future, one line of code at a time.
                        </motion.div>
                    </div>

                    <motion.div
                        transition={{ duration: 5.5 }}
                        variants={childVariant}
                        className="mt-5"
                    >
                        <motion.a
                            variants={buttonVariant}
                            whileHover="hover"
                            className=" px-5 py-3 rounded-md bg-teal-300 transition-all ease-in-out duration-300 text-white-100 font-bold cursor-pointer hover:bg-white-100 hover:text-teal-300"
                            href="/CV/TaofiqSulaymanCV.pdf"
                        >
                            View CV
                        </motion.a>
                    </motion.div>

                    {resumeActive && <ResumeViewer openResume={openResume} />}
                </motion.div>

                <motion.div
                    variants={imageVariant}
                    whileInView={{
                        y: ["20%", "0%"],
                        opacity: [0, 0.2, 0.3, 0.5, 0.6, 0.9, 1],
                    }}
                    initial="hidden"
                    animate="visible"
                    className=" "
                >
                    <Image
                        width={400}
                        height={400}
                        className=" mb-4 w-full h-full"
                        src="/images/avatar/profile.png"
                    />
                </motion.div>
            </div>
        </>
    );
};

export default Hero;
