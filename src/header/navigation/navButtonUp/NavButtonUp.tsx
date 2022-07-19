import React from 'react';
import styles from './NavButtonUp.module.scss'
import svg from '../../../common/images/upButtonNav/up.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";

type NavButtonUpPropsType = {
    visible: boolean
}

const NavButtonUp = (props: NavButtonUpPropsType) => {

    return props.visible
        ? <AnchorLink href="#about" className={styles.link}>
            <img className={styles.img} src={svg} alt="up"/>
        </AnchorLink>
        : null

};

export default NavButtonUp;