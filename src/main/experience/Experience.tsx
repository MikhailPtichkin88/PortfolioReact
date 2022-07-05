import React from 'react';
import SliderComponent from "./slider/Slider";

const Experience = () => {
    return (
        <section className="experience" id="experience">
            <div className="experience__wrapper">
                <div className="container">
                    <h2 className="title">
                        Опыт
                    </h2>
                    <SliderComponent/>
                </div>
            </div>
        </section>
    );
};

export default Experience;