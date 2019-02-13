// @flow
import * as React from 'react'
import styles from './component.css'

const Nav = () => {

    return (
        <div className={styles.navBar}>
            <div><a href='/' className={styles.navLink}>Home</a></div>
            <div>
                <a href='https://www.devxia.com/Lil-Data' target='_blank' className={styles.navLink}>
                    Lil Data
                </a>
            </div>
            <div>
                <a href='https://github.com/harrisonxia' target='_blank' className={styles.navLink}>
                    GitHub
                </a>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/harrison-xia/' target='_blank' className={styles.navLink}>
                    LinkedIn
                </a>
            </div>
            <div>
                <a href='mailto:engcxia@gmail.com' target='_blank' className={styles.navLink}>
                    Contact
                </a>
            </div>
        </div>
    )
}

export default Nav
