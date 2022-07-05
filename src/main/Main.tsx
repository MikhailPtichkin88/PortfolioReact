import React from 'react';
import styles from './Main.module.css'
import About from "./about/About";
import Experience from "./experience/Experience";

const Main = () => {

    return (
   <main>
       <About/>
       <Experience/>
   </main>
    );
};

export default Main;