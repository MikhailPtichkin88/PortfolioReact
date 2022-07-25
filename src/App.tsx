import React, {createContext, useState} from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

export type LangType = "rus" | "eng"

// @ts-ignore
export const Context = createContext()

function App() {
    const [lang, changeLang] = useState<LangType>('rus')


    const changeLangCallback = (lang: LangType) => {
        changeLang(lang)
    }

    return (
        <Context.Provider value={lang}>
            <div className="App">
                <Header/>
                <Main changeLang={changeLangCallback}/>
                <Footer/>
            </div>
        </Context.Provider>
    );
}

export default App;
