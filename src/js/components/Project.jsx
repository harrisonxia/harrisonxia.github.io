import * as React from 'react'
import {
    Window,
    WindowContent,
    WindowHeader,
    Tab,
    Tabs,
    TabBody,
    Fieldset,
    reset,
    themes,
    Button,
} from 'react95'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {scrollNext} from './Window.jsx'
import styles from './Window.css'

const ResetStyles = createGlobalStyle`
  ${reset}
`
// const temp = () => (
//     <TabBody>
//         <Fieldset label="Order:">
//             <div style={{padding: '0.5em 0 0.5em 0'}}>Amount:</div>
//             <NumberField width={'100%'} min={0} value={0} onChange={() => null}/>
//             <Checkbox
//                 style={{marginTop: '1rem'}}
//                 name="shipping"
//                 value="fast"
//                 label="Fast shipping"
//                 onChange={() => null}
//                 defaultChecked={true}
//             />
//         </Fieldset>
//     </TabBody>
// )
class Project extends React.Component {
    state = {
        activeTab: 0,
    }
    handleChange = value => this.setState({activeTab: value})

    render() {
        const {activeTab} = this.state
        return (
            <div>
                <ResetStyles/>
                <ThemeProvider theme={themes.water}>
                    <Window>
                        <WindowHeader style={{fontSize: '1.5rem'}}>🤩 projects.exe</WindowHeader>
                        <WindowContent>
                            <Tabs value={activeTab} onChange={this.handleChange}>
                                <Tab value={0}>AI Fashion Designer</Tab>
                                <Tab value={1}>Gaming and Streaming Industry Analysis</Tab>
                                <Tab value={2}>Hackathon</Tab>
                            </Tabs>
                            <div>
                                {activeTab === 0 && (
                                    <TabBody>
                                        <Fieldset>
                                            Oct 2018 – Dec 2018
                                            <ul styleName='listText'>
                                                <li styleName='itemText'>• Applied and trained DCGAN model to generate
                                                    original and innovative fashion patterns.
                                                </li>
                                                <li styleName='itemText'>• Achieved real time object detection and
                                                    virtual try-on with Mask R-CNN.
                                                </li>
                                                <li styleName='itemText'>• Fine-tuned existing models to enhance object
                                                    detection accuracy and broaden real time usage.
                                                </li>
                                                <li styleName='itemText'>• Technology:PyTorch, Python, CUDA, GoogleColab
                                                </li>
                                            </ul>
                                            <br/>
                                        </Fieldset>
                                    </TabBody>
                                )}
                                {activeTab === 1 && (
                                    <TabBody>
                                        <Fieldset>
                                            Apr 2017 – Aug 2018
                                            <ul styleName='listText'>
                                                <li styleName='itemText'>• Analyzed the growth and trends in the gaming
                                                    industry fetching data from various APIs.
                                                </li>
                                                <li styleName='itemText'>• Implemented a web crawler and performed ETL
                                                    on over 50GB of raw data using PySpark.
                                                </li>
                                                <li styleName='itemText'>• Developed the web frontend for visualizing
                                                    analysis using JavaScript [devxia.com/Lil-Data]
                                                </li>
                                                <li styleName='itemText'>• Applied Spark ML to predict future games and
                                                    channels growth.
                                                </li>
                                                <li styleName='itemText'>• Technology: Spark, Python, Hadoop,
                                                    JavaScript, ReactJS, ReChartsJS
                                                </li>
                                            </ul>
                                            <br/>
                                        </Fieldset>
                                    </TabBody>
                                )}
                                {activeTab === 2 && (
                                    <TabBody>
                                        <Fieldset>
                                            <ul styleName='listText'>
                                                <li styleName='itemText'>• Open Government Partnership Global Summit Hackathon, Ottawa May 2019
                                                    <br/>o Analyzed and created transport, safety, economy indicators for 9 cities in Canada.
                                                    <br/>o Implemented web frontend and visualization [devxia.com/Stats-In-A-Can]
                                                </li>
                                                <li styleName='itemText'>• DeloitteAIHacks, Vancouver Sep 2019
                                                    <br/>o Prepared the data and built data model to make suggestions for K-12inBC.
                                                </li>
                                            </ul>
                                            <br/>
                                        </Fieldset>
                                    </TabBody>
                                )}
                            </div>
                        </WindowContent>
                        <div styleName='buttonGroup'>
                            <Button onClick={() => scrollNext('experience', -150)}><span>Back ⇑</span></Button>
                            <Button onClick={() => scrollNext('project')}><span>Next ⇓</span></Button>
                        </div>
                    </Window>
                </ThemeProvider>
            </div>
        )
    }
}

export default Project