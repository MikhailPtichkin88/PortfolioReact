import React, {useContext} from 'react';
import {Carousel} from 'react-responsive-carousel';
import "./Slider.scss";
import styles from './Slider.module.scss'

import univer from '../../../common/images/experience/Plekhanov.jpg';
import lotte from '../../../common/images/experience/lotte.jpg';
import udemy from '../../../common/images/experience/udemy.jpg';
import inc from '../../../common/images/experience/incubator.jpg';
import from0 from '../../../common/images/experience/from0.jpg';
import icon from '../../../common/images/experience/icon.svg';
import liga from '../../../common/images/experience/liga.jpg';
import {Context} from "../../../App";


const SliderComponent = () => {

    let settings = {
        showThumbs: false,
        showStatus: false,
        stopOnHover: true,
        autoPlay: false,
        infiniteLoop: true,
        interval: 10000,

    }
    let langActive = useContext(Context)
    return (
        <Carousel {...settings}>


                <div className={styles.slide}>
                    <div className={styles.img + ' ' + styles.lotte} style={{backgroundImage: `url(${liga})`}}></div>
                    <div className={styles.text}>
                        {
                            (langActive === 'rus')
                                ? ` С  2022 года и по настоящее время работаю в Лиге Цифровой Экономики на должности junior frontend developer.`
                                : `From 2022 to the present, I have been working in the Digital Economy League as a junior frontend developer.`
                        }
                    </div>
                </div>
            <div className={styles.slide}>
                <div className={styles.img + ' ' + styles.courses}
                     style={{backgroundImage: `url(${udemy}), url(${from0}), url(${inc})`}}></div>
                <div className={styles.text + ' ' + styles.textCourses}>
                    {
                        (langActive === 'rus')
                            ? "C 2021 года начал обучение веб-разработке, прошел следующие курсы:"
                            : "In 2021 I've finished several courses:"
                    }

                    <ul className={styles.list} style={{listStyle: `url(${icon})`}}>
                        <li className={styles.item}>
                            {
                                (langActive === 'rus')
                                    ? "Авторский курс по верстке (От 0 до 1)"
                                    : "Markup course by Vadim Prokopchuk ('From 0 to 1')"
                            }
                        </li>
                        <li className={styles.item}>
                            {
                                (langActive === 'rus')
                                    ? "JavaScript + React - с нуля до результата (Udemy)"
                                    : "Full JavaScript course - from 0 to result (Udemy)"
                            }
                        </li>
                        <li className={styles.item}>
                            {
                                (langActive === 'rus')
                                    ? "WEB-разработчик 2021 (Udemy)"
                                    : "WEB-development 2021 (Udemy)"
                            }
                        </li>
                        <li className={styles.item}>
                            {
                                (langActive === 'rus')
                                    ? "Frontend developer (IT Incubator)"
                                    : "Frontend developer (IT Incubator)"
                            }
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.slide}>
                <div className={styles.img + ' ' + styles.lotte} style={{backgroundImage: `url(${lotte})`}}></div>
                <div className={styles.text}>
                    {
                        (langActive === 'rus')
                            ? ` С 2013 по 2022 год работал в отеле Lotte Hotel Moscow. Хотя моя работа не была связана с IT, те
                    навыки коммуникации, а так же хороший уровень английского языка, которые я наработал за эти годы,
                    обязательно пригодятся и в сфере frontend'а.`
                            : ` Since 2013 till 2022 I have been working in Lotte Hotel Moscow. Though my job was far enough from web development, I strongly believe that those soft skills and english language practice that i've developed for all those years will be a good help in frontend.`
                    }

                </div>
            </div>
            <div className={styles.slide}>
                <div className={styles.img + ' ' + styles.lotte} style={{backgroundImage: `url(${univer})`}}></div>
                <div className={styles.text}>
                    {
                        (langActive === 'rus')
                            ? `В 2012 окончил Российский Экономический Университет им. Г.В. Плеханова,
                    Инженерно-экономический факультет.`
                            : `In 2012 I've graduated from Russian Economic University named after G.V. Plekhanov with a degree in economics and management in hospitality industry and restaurant business.`
                    }

                    <p>{
                        (langActive === 'rus')
                            ? `Специальность: Экономика и управление в индустрии
                        гостеприимства,
                        туризма и ресторанного бизнеса.`
                            : ""
                    }
                    </p>
                </div>
            </div>
        </Carousel>
    );
};

export default SliderComponent;