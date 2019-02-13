import * as React from 'react'
import styles from './main.css'
// import CustomizedNavBar from './navs'
import Nav from './nav.jsx'
import Footer from './footer.jsx'
const Main = () => {

    return (
        <main className={styles.main}>
            {/*<CustomizedNavBar/>*/}
            <Nav/>
            <div className={styles.hi}>
                <span>Hi, </span>
                <span>I'm Chuangxin Xia.</span>
                <span>Call me Harrison.</span>
            </div>
            <div className={styles.description}>
                Graduating from University of California San Diego studying Computer Science, <br/>
                currently I'm pursuing my Master of Science degree in Computer Science from Simon Fraser University.<br/>
                I'm looking for co-op opportunity in Data Science starting late April or early May 2019.
            </div>
            <Footer/>
        </main>
    )
}

export default Main
