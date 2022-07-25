import React from 'react';
import styles from './SocialItem.module.scss'


type socialItemPropsType = {
    itemClass:string,
    link:string
    svgClass:string
    svgPic:string
}


export const SocialItem = (props:socialItemPropsType) => {
    return (
            <li className={styles.socialItem+' '+props.itemClass}>
                <a className={styles.socialLink} href={props.link}>
                    <svg className={styles.socialImg+' '+props.svgClass}>
                        <use xlinkHref={props.svgPic}></use>
                    </svg>
                </a>
            </li>
    );
};

