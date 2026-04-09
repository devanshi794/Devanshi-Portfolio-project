import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import './App.css';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out"
        });
    }, []);

    return (
        <>
            <Header />

            <main>
                <Hero />
                <About />
                <Skills />
                <Resume />
                <Portfolio />
                <Testimonials />
                <Services />
                <Contact />
            </main>

            <Footer />
        </>
    );
}

export default App;