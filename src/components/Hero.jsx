import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas, MacView } from "./canvas";

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-5 ">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className="text-[#915eff] ">Sabbir</span>
                    </h1>
                    <p
                        className={`${styles.heroSubText}
                    
                     mt-2 text-white-80`}
                    >
                        I'm a full-stack web developer.
                        <br className="sm:block hidden" /> I love to build web
                        applications.
                    </p>
                </div>
            </div>
            <div
                className={`${styles.paddingX} absolute inset-0 top-[140px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
            >
                {/* <ComputersCanvas /> */}
                <MacView />
            </div>
        </section>
    );
};

export default Hero;
