import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "./Slider.scss";
import styles from './Slider.module.scss'

import univer from '../../../common/images/experience/Plekhanov.jpg';
import lotte from '../../../common/images/experience/lotte.jpg';
import udemy from '../../../common/images/experience/udemy.jpg';
import inc from '../../../common/images/experience/incubator.jpg';
import from0 from '../../../common/images/experience/from0.jpg';
import icon from '../../../common/images/experience/icon.svg';


const SliderComponent = () => {

    let settings = {
        showThumbs: false,
        showStatus: false,
        stopOnHover: true,
        autoPlay: false,
        infiniteLoop: true,
        interval: 10000,

    }
    return (
        <Carousel {...settings}>


            <div className={styles.slide}>
                <div className={styles.img + ' ' + styles.courses}
                     style={{backgroundImage: `url(${udemy}), url(${from0}), url(${inc})`}}></div>
                <div className={styles.text + ' ' + styles.textCourses}>
                    C ноября 2021 начал обучение веб-разработке, прошел следующие курсы:
                    <ul className={styles.list} style={{listStyle: `url(${icon})`}}>
                        <li className={styles.item}>Авторский курс по верстке (От 0 до 1)
                        </li>
                        <li className={styles.item}>JavaScript + React - с нуля до результата (Udemy)</li>
                        <li className={styles.item}>WEB-разработчик 2021 (Udemy)</li>
                        <li className={styles.item}>Frontend developer (IT Incubator) - в процессе
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.slide}>
                <div className={styles.img + ' ' + styles.lotte} style={{backgroundImage: `url(${lotte})`}}></div>
                <div className={styles.text}>
                    С 2013 по 2022 год работал в отеле Lotte Hotel Moscow. Хотя моя работа не была связана с IT, те
                    навыки коммуникации, а так же хороший уровень английского языка, которые я наработал за эти годы,
                    обязательно пригодятся и в сфере frontend'а.
                </div>
            </div>
            <div className={styles.slide}>
                <div className={styles.img+' ' +styles.lotte} style={{backgroundImage: `url(${univer})`}}></div>
                <div className={styles.text}>
                    В 2012 окончил Российский Экономический Университет им. Г.В. Плеханова,
                    Инженерно-экономический факультет.
                    <p><span className={styles.bold}>Специальность:</span> Экономика и управление в индустрии гостеприимства,
                        туризма и ресторанного бизнеса.
                    </p>
                </div>
            </div>
        </Carousel>
    );
};

export default SliderComponent;