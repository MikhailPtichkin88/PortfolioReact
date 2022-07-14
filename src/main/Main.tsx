import React from 'react';
import styles from './Main.module.css'
import About from "./about/About";
import Experience from "./experience/Experience";
import Skills from "./skills/Skills";
import Portfolio from "./portfolio/Portfolio";
import HireMe from "./hireMe/HireMe";

const Main = () => {

    return (
   <main>
       <About/>
       <Experience/>
       <Skills/>
       <Portfolio/>
       <HireMe/>
   </main>
    );
};

export default Main;