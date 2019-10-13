import * as React from 'react'
import {
    Button,
    Window,
    WindowContent,
    WindowHeader,
    Fieldset,
    Radio,
    Progress,
    Tooltip,
    reset,
    themes,
} from 'react95'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {scroller} from 'react-scroll'
import styles from './Window.css'

const ResetStyles = createGlobalStyle`
  ${reset}
`
const dummy = () => {
}

export const scrollNext = (elementName, offsetNum) => {
    console.log(offsetNum? offsetNum: null)
    scroller.scrollTo(elementName, {
        duration: 3000,
        smooth: 'easeInOutQuint',
        offset: offsetNum? offsetNum: null
    })
}

const Intro = () => (
    <div stylename='styles.windowDivLayer}'>
        <ResetStyles/>
        <ThemeProvider theme={themes.water}>
            <Window style={{letterSpacing: '0.1em'}}>
                <WindowHeader style={{fontSize: '1.5rem'}}>😎 hello.exe</WindowHeader>
                <WindowContent>
                    <Fieldset>
                        My name is <span styleName='styles.nameInline'>Chuangxin Xia.</span>
                        <br/><br/>
                        You can call me <span styleName='styles.nameInline'>Harrison.</span>
                    </Fieldset>
                    <br/>
                    <Fieldset label="Education">
                        <Tooltip text="I'm finishing up my last term at SFU!‍">
                            <div styleName='styles.radioProcess'>
                                <Radio
                                    checked={true}
                                    onChange={dummy}
                                    value="SFU"
                                    label="🇨🇦 Simon Fraser University"
                                    name="school"
                                />
                                <div styleName='styles.textProcess'>
                                    <div styleName='styles.eduTextLong'>Master of Science in Computer Science (Big Data)</div>
                                    <Progress shadow={true} width={80} percent={78}/>
                                </div>
                                <br/>
                            </div>
                        </Tooltip>
                        <div styleName='styles.radioProcess'>
                            <Radio
                                checked={false}
                                onChange={dummy}
                                value="UCSD"
                                label="🇺🇸 University of California San Diego"
                                name="school"
                            />
                            <div styleName='styles.textProcess'>
                                <div styleName='styles.eduText'>Bachelor of Science in Computer Science</div>
                                <Progress shadow={true} width={80} percent={100}/>
                            </div>
                            <br/>
                        </div>
                    </Fieldset>
                </WindowContent>
                <div styleName='styles.buttonGroup'>
                    <Button onClick={() => scrollNext('experience',-150)}><span>Next</span></Button>
                </div>
            </Window>
        </ThemeProvider>
    </div>
)

export default Intro