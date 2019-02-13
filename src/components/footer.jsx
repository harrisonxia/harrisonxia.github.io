// @flow
import * as React from 'react'
import styles from './component.css'

const Footer = () => {

    return (
        <div className={styles.footer}>
            Background photo was captured by my friend Allen Cao
            <a className={styles.footerLink} target='_blank' href='https://www.allencaophotography.com/'> [Site] </a>
            in the Alvord Desert, Oregon. It was taken during our trip there in summer 2018.
        </div>
    )
}

export default Footer
