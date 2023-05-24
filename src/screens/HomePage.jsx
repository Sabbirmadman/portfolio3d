import React from "react";
import { Hero, Navbar } from "../components";

export default function HomePage() {
    return (
        <div className="relative z-0 bg-primary h-screen overflow-hidden">
            <div
                className="bg-hero-pattern
                bg-cover bg-no-repeat bg-center"
            >
                <Navbar />
                <Hero />
            </div>
        </div>
    );
}
