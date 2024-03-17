import React, {useContext} from "react";
import styles from "./About.module.scss";
import photoWebp from "../../common/images/photo.webp";
import photoJpg from "../../common/images/photo.jpg";
import LanguageChange from "./language/LanguageChange";
import pdfRus from "../../common/pdf/print.pdf";
import pdfEng from "../../common/pdf/print.pdf";
import {Context, LangType} from "../../App";

type AboutPropsType = {
  changeLang: (lang: LangType) => void;
};

const About = (props: AboutPropsType) => {
  let langActive = useContext(Context);

  return (
    <section id="about">
      <div className={styles.wrapper}>
        <div className="container">
          <div className={styles.inner}>
            <h1 className={styles.name}>
              {langActive === "rus" ? "Птичкин Михаил" : "Ptichkin Mikhail"}
            </h1>

            <div className={styles.info}>
              <span>Frontend developer</span>
              {langActive === "rus" ? "Россия, Москва" : "Moscow, Russia"}
              {langActive === "rus" ? (
                <a
                  className={styles.pdfLink}
                  target="_blank"
                  href={pdfRus}
                  rel="noreferrer"
                >
                  <span className={styles.pdfDescr}>скачать</span> CV
                </a>
              ) : (
                <a
                  className={styles.pdfLink}
                  target="_blank"
                  href={pdfEng}
                  rel="noreferrer"
                >
                  <span className={styles.pdfDescr}>download</span> CV
                </a>
              )}
            </div>

            <LanguageChange active={true} changeLang={props.changeLang} />
          </div>
          <div className={styles.photoContainer}>
            <picture>
              <source
                className={styles.photo}
                srcSet={photoWebp}
                type="image/webp"
              />
              <img className={styles.photo} src={photoJpg} alt="My photo" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
