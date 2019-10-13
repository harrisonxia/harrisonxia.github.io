import * as React from 'react'
import Header from './HeadBar.jsx'
import Intro from './Window.jsx'
import Experience from './WindowWithTab.jsx'
import Project from './Project.jsx'
import {Element} from 'react-scroll'
import './App.css'

const App = () => (
    // Background Photo by Pero Kalimero on Unsplash
    <div styleName='mainDiv'>
        <Header/>

        <div styleName='mainContainer'>
            <div styleName='windowContainer'>
                <Element name='intro'>
                    <Intro/>
                </Element>
            </div>

            <div styleName='windowContainer'>
                <Element name='experience'>
                    <Experience/>
                </Element>
            </div>

            <div styleName='windowContainer'>
                <Element name='project'>
                    <Project/>
                </Element>
            </div>
        </div>
    </div>
)

export default App
