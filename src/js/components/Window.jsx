import * as React from 'react'
import {
    Button,
    Checkbox,
    Window,
    WindowContent,
    WindowHeader,
    Fieldset,
    Radio,
    Tooltip,
    styleReset,
} from 'react95'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { scroller } from 'react-scroll'
import styles from '../../css/Window.css'

import water from 'react95/dist/themes/water.js';

const ResetStyles = createGlobalStyle`
  ${styleReset}
`

export const scrollNext = (elementName, offsetNum) => {
    scroller.scrollTo(elementName, {
        duration: 3000,
        smooth: 'easeInOutQuint',
        offset: offsetNum ? offsetNum : null,
    })
}

export const openExternal = (link) => {
    window.open(
        link,
        '_blank' // <- This is what makes it open in a new window.
    );
}

const Intro = () => (
    <div stylename='styles.windowDivLayer}'>
        <ResetStyles />
        <ThemeProvider theme={water}>
            <Window styleName='styles.windowSpacing'>
                <WindowHeader styleName='styles.windowHeader'>😎 Hello.exe</WindowHeader>
                <WindowContent>
                    <Fieldset>
                        Hi, I'm <span styleName='styles.nameInline'>Chuangxin (Harrison) Xia.</span>
                        <br />
                    </Fieldset>
                    <br />
                    <Fieldset label="Education">
                        <div styleName='styles.radioProcess'>
                            <Checkbox checked={true} onChange={() => null}
                                value="SFU"
                                label="🇨🇦 Simon Fraser University"
                                name="school" />
                            <div styleName='styles.textProcess'>
                                <div styleName='styles.eduTextLong'>
                                    Master of Science in Computer Science (Big Data)
                                </div>
                                <div styleName='styles.eduTextLong'>
                                    Sep, 2018 -- Dec, 2019
                                </div>
                            </div>
                            <br />
                        </div>
                        <hr />
                        <div styleName='styles.radioProcess'>
                            <Checkbox
                                checked={true}
                                onChange={() => null}
                                value="UCSD"
                                label="🇺🇸 University of California San Diego"
                                name="school"
                            />
                            <div styleName='styles.textProcess'>
                                <div styleName='styles.eduTextLong'>Bachelor of Science in Computer Science</div>
                                <div styleName='styles.eduTextLong'>Sep, 2012 -- Sep, 2016</div>
                            </div>
                            <br />
                        </div>
                    </Fieldset>
                </WindowContent>
                <div styleName='styles.buttonGroup'>
                    <Button onClick={() => scrollNext('techStack', -150)}><span>Next ⇓</span></Button>
                </div>
            </Window>
        </ThemeProvider>
    </div>
)

export default Intro