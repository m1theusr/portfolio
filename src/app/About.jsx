import React from 'react';

const About = () => {
    return (
        <main className="bg-neutral-700">
            <div className="py-16 bg-neutral-900 text-center" data-aos="fade">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold">About</h1>
                    <p className="mt-4 text-lg text-white">
                        Text
                    </p>
                </div>
            </div>

            <section id="about" className="py-16">
                <div className="container mx-auto px-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="flex flex-wrap justify-center gap-16">
                        <div className="w-full lg:w-1/3">
                            <img src="assets/img/profile-img.jpg" className="rounded-full w-full h-auto object-cover" alt="Profile" />
                        </div>
                        <div className="w-full lg:w-2/3">
                            <h2 className="text-3xl font-semibold">DevOps Engineer and SRE</h2>
                            <p className="italic py-3 text-gray-600">
                                Text
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <ul className="list-none">
                                        <li className="flex items-center text-white"><i className="bi bi-chevron-right mr-2"></i><strong>Birthday:</strong> <span>28 Mar 2000</span></li>
                                        <li className="flex items-center text-white"><i className="bi bi-chevron-right mr-2"></i><strong>City: </strong> <span> Londrina, BR</span></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="list-none">
                                        <li className="flex items-center text-white"><i className="bi bi-chevron-right mr-2"></i><strong>Age:</strong> <span>24</span></li>
                                        <li className="flex items-center text-white"><i className="bi bi-chevron-right mr-2"></i><strong>Degree:</strong> <span>bachelor's</span></li>
                                        <li className="flex items-center text-white"><i className="bi bi-chevron-right mr-2"></i><strong>Email:</strong> <span>m1theusrodrigues@gmail.com</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="py-3 text-gray-600">
                                Text
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="stats" className="py-16 bg-black">
                <div className="container mx-auto" data-aos="fade-up" data-aos-delay="100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-gray-800 relative p-8 rounded-xl">
                                <i className="bi bi-emoji-smile text-4xl"></i>
                                <div className="stats-item mt-4">
                                    <span className="text-3xl font-bold text-white">3</span>
                                    <p className="text-gray-200">Projects</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-gray-800 relative p-8 rounded-xl">
                                <i className="bi bi-emoji-smile text-4xl"></i>
                                <div className="stats-item mt-4">
                                    <span className="text-3xl font-bold text-white">3</span>
                                    <p className="text-gray-200">Projects</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-gray-800 relative p-8 rounded-xl">
                                <i className="bi bi-emoji-smile text-4xl"></i>
                                <div className="stats-item mt-4">
                                    <span className="text-3xl font-bold text-white">3</span>
                                    <p className="text-gray-200">Projects</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="backdrop-blur-xl bg-gray-800/30 relative p-8 rounded-xl">
                                <i className="bi bi-emoji-smile text-4xl"></i>
                                <div className="stats-item mt-4">
                                    <span className="text-3xl font-bold text-white">3</span>
                                    <p className="text-gray-200">Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills" className="py-16">
                <div className="container mx-auto text-center" data-aos="fade-up">
                    <h2 className="text-3xl font-semibold">Skills</h2>
                    <div className="text-xl text-gray-600 mt-2"><span>My</span> <span className="font-bold">Skills</span></div>
                </div>
                <div className="container mx-auto mt-8" data-aos="fade-up" data-aos-delay="100">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <div className="mb-4">
                                <span className="flex justify-between text-white">
                                    <span>Container Orchestration</span>
                                    <span>85%</span>
                                </span>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div className="bg-[rgb(251,255,0)] h-2 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="flex justify-between text-white">
                                    <span>Linux</span>
                                    <span>100%</span>
                                </span>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div className="bg-[rgb(251,255,0)] h-2 rounded-full" style={{ width: '100%' }}></div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="flex justify-between text-white">
                                    <span>JavaScript</span>
                                    <span>50%</span>
                                </span>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div className="bg-[rgb(251,255,0)] h-2 rounded-full" style={{ width: '50%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <span className="flex justify-between text-white">
                                    <span>Google Cloud</span>
                                    <span>70%</span>
                                </span>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div className="bg-[rgb(251,255,0)] h-2 rounded-full" style={{ width: '70%' }}></div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="flex justify-between text-white">
                                    <span>AWS</span>
                                    <span>60%</span>
                                </span>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div className="bg-[rgb(251,255,0)] h-2 rounded-full" style={{ width: '60%' }}></div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="flex justify-between text-white">
                                    <span>Node.js</span>
                                    <span>85%</span>
                                </span>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div className="bg-[rgb(251,255,0)] h-2 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;