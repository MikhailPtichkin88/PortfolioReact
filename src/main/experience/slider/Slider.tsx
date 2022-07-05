import React from 'react';

const SliderComponent = () => {
    return (
        <div className="experience__text">
            <p className="experience__text-par">
                В 2012 окончил Российский Экономический Университет им. Г.В. Плеханова,
                Инженерно-экономический факультет, специальность: Экономика и управление в индустрии
                гостеприимства, туризма и ресторанного бизнеса.
            </p>
            <p className="experience__text-par">
                С 2013 года работаю в отеле Lotte Hotel Moscow. Хотя моя работа не связана с IT, те soft
                skills, а так же хороший уровень английского языка, которые я наработал за эти годы,
                обязательно пригодятся и в сфере frontend'а.
            </p>
            <div className="experience__text-par">
                C ноября 2021 начал обучение веб-разработке, прошел следующие курсы:
                <ul className="experience__list">
                    <li className="experience__list-item">Авторский курс по верстке от Вадима Прокопчука
                        ("От 0 до 1")
                    </li>
                    <li className="experience__list-item">Полный курс по JavaScript + React - с нуля до
                        результата (Udemy)
                    </li>
                    <li className="experience__list-item">WEB-разработчик 2021 (Udemy)</li>
                    <li className="experience__list-item">HTML и CSS с нуля для начинающих (BrainsCloud)
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SliderComponent;