import React from 'react';
import styles from './Main.module.css'
import About from "./about/About";
import Experience from "./experience/Experience";
import Skills from "./skills/Skills";
import Portfolio from "./portfolio/Portfolio";

const Main = () => {

    return (
   <main>
       <About/>
       <Experience/>
       <Skills/>
       <Portfolio/>
   </main>
    );
};

export default Main;