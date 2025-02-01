import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Resume = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    const AnimatedCounter = ({ value }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            let start = 0;
            const duration = 1500;
            const stepTime = Math.abs(Math.floor(duration / value));

            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start >= value) clearInterval(timer);
            }, stepTime);

            return () => clearInterval(timer);
        }, [value]);

        return <span>{count}%</span>;
    };

    const ProgressBar = ({ value }) => {
        return (
            <motion.div
                className="bg-[rgb(251,255,0)] h-2 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${value}%` }}
                transition={{ duration: 3, ease: "easeOut" }}
            />
        );
    };

    return (
        <main id="resume" className="bg-black">
            <div className="py-16 text-center" data-aos="fade">
                <div className="text-[rgb(251,255,0)]    container mx-auto">
                    <h1 className="text-4xl font-bold">Resume</h1>
                    <p className="mt-4 text-lg text-white">Text</p>
                </div>
            </div>

            <section id="skills" className="py-16">
                <div className="container mx-auto text-center" data-aos="fade-up">
                    <h2 className="text-3xl font-semibold">Skills</h2>
                    <div className="text-xl text-gray-400 mt-2">
                        <span>My</span> <span className="font-bold">Skills</span>
                    </div>
                </div>

                <div className="container mx-auto mt-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <div className="mb-4" data-aos="fade-right">
                                <span className="flex justify-between text-white">
                                    <span>Container Orchestration</span>
                                    <AnimatedCounter value={85} />
                                </span>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <ProgressBar value={85} />
                                </div>
                            </div>
                            <div className="mb-4" data-aos="fade-right" data-aos-delay="200">
                                <span className="flex justify-between text-white">
                                    <span>Linux</span>
                                    <AnimatedCounter value={100} />
                                </span>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <ProgressBar value={100} />
                                </div>
                            </div>
                            <div className="mb-4" data-aos="fade-right" data-aos-delay="300">
                                <span className="flex justify-between text-white">
                                    <span>JavaScript</span>
                                    <AnimatedCounter value={50} />
                                </span>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <ProgressBar value={50} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mb-4" data-aos="fade-left">
                                <span className="flex justify-between text-white">
                                    <span>Google Cloud</span>
                                    <AnimatedCounter value={70} />
                                </span>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <ProgressBar value={70} />
                                </div>
                            </div>
                            <div className="mb-4" data-aos="fade-left" data-aos-delay="200">
                                <span className="flex justify-between text-white">
                                    <span>AWS</span>
                                    <AnimatedCounter value={60} />
                                </span>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <ProgressBar value={60} />
                                </div>
                            </div>
                            <div className="mb-4" data-aos="fade-left" data-aos-delay="300">
                                <span className="flex justify-between text-white">
                                    <span>Node.js</span>
                                    <AnimatedCounter value={85} />
                                </span>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <ProgressBar value={85} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Resume;
