import React from 'react';
import About from "./about/About";
import Experience from "./experience/Experience";
import Skills from "./skills/Skills";
import Portfolio from "./portfolio/Portfolio";
import HireMe from "./hireMe/HireMe";
import {LangType} from "../App";

type MainPropsType={
    changeLang:(lang:LangType)=>void
}

const Main = (props:MainPropsType) => {

    return (
   <main>

       <About changeLang={props.changeLang} />
       <Experience/>
       <Skills/>
       <Portfolio/>
       <HireMe/>
   </main>
    );
};

export default Main;