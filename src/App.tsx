import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Projects from "./projects/Projects";
import Distant from "./distant/Distant";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
            <Distant/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
