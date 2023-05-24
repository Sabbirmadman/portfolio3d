import React from "react";
import { Hero, Navbar } from "../../components";
import "./homepage.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    aws,
    django,
    figma,
    mongodb,
    nodejs,
    react_native,
    reactjs,
    typescript,
} from "../../assets";

export default function HomePage() {
    const { ref, inView, entry } = useInView({
        /* Options for the Intersection Observer API */
        threshold: 0.5, // Trigger when 50% of the element is visible
    });

    return (
        <div className="relative z-0 bg-primary ">
            <div
                className="bg-hero-pattern
                bg-cover bg-no-repeat bg-center h-screen overflow-hidden"
            >
                <Hero />
            </div>
            <div className="homepage_body">
                <div className="homepage_body__container">
                    <div className="top">
                        <h1>
                            Elevate your project with the "Elite Squad" <br />{" "}
                            of software development.
                        </h1>
                        <p>
                            Bring onboard experienced and dedicated software
                            engineers.
                            <br /> Effortlessly scale your team to meet your
                            evolving needs.
                        </p>
                    </div>
                    <div className="bottom">
                        <div>
                            <h1>Custom Software Solutions</h1>
                            <p>build custom software solutions for your</p>
                            <i className="fas fa-arrow-right"></i>
                        </div>
                        <div>
                            <h1>Team Extension</h1>
                            <p>
                                Scale your team with our dedicated software
                                engineers
                            </p>
                            <i className="fas fa-arrow-right"></i>
                        </div>
                        <div>
                            <h1>Project Outsourcing</h1>
                            <p>Outsource your project with our team</p>
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className="homepage_body__mission">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#eeede4"
                            fill-opacity="1"
                            d="M0,128L60,106.7C120,85,240,43,360,74.7C480,107,600,213,720,245.3C840,277,960,235,1080,192C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                        ></path>
                    </svg>

                    <div className="homepage_body__mission__container">
                        <div className="left">
                            <span>
                                {" "}
                                <h1>OUR MISSION</h1>
                                <p>
                                    At Prolific Tech, our mission is to empower
                                    businesses and individuals with beautifully
                                    crafted, high-performance websites, web
                                    apps, and mobile apps. We strive to leverage
                                    the power of cutting-edge technologies such
                                    as React JS, React Native, Node JS, Django,
                                    AWS, and Play Store to deliver innovative
                                    solutions that exceed our clients'
                                    expectations. We are committed to creating
                                    user-centric experiences that drive growth,
                                    foster engagement, and leave a lasting
                                    impact.
                                </p>
                            </span>
                        </div>
                        <div className="right">
                            <img
                                src={require("./../../assets/pages/mission.png")}
                                alt=" "
                            />
                        </div>
                    </div>
                </div>
                <div className="homepage_body__techstack__container">
                    <span className="top">
                        <h1>Select a tech stack that serves you well</h1>
                        <p>
                            Get an unbiased perspective on the best frameworks
                            and tools for your project.
                        </p>
                    </span>

                    <div className="bottom">
                        <img src={nodejs} alt="nodejs" />
                        <img src={reactjs} alt="reactjs" />
                        <img src={typescript} alt="typescript" />
                        <img src={mongodb} alt="mongodb" />
                        <img src={figma} alt="figma" />
                        <img src={react_native} alt="react_native.png" />
                        <img src={django} alt="django" />
                        <img src={aws} alt="aws" />
                    </div>
                </div>
                <div className="homepage_body__vision__container">
                    <div className="homepage_body__vision__body">
                        <div className="left">
                            <img
                                src={require("./../../assets/pages/rocket.gif")}
                                alt="rocket"
                            />
                        </div>
                        <div className="right">
                            <h1>Our Vision</h1>
                            <p>
                                Our vision is to become a leading provider of
                                custom software solutions, renowned for our
                                exceptional craftsmanship and commitment to
                                client success. We aim to revolutionize the
                                digital landscape by continuously pushing the
                                boundaries of technology, embracing innovation,
                                and staying ahead of the curve. We envision a
                                future where businesses thrive through seamless,
                                intuitive digital experiences that captivate and
                                delight their target audience.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="homepage_body__project__container"></div>
            </div>
        </div>
    );
}
