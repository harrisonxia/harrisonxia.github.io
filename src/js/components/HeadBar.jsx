import * as React from 'react'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {
    Button,
    AppBar,
    TextField,
    Toolbar,
    reset,
    themes,
    List,
    ListItem,
    Divider,
    Hourglass,
    Tooltip
} from 'react95'
import styles from './HeadBar.css'
// const ResetStyles = createGlobalStyle`
//   ${reset}
// `
function Menu() {
    const [open, setOpen] = React.useState(false)

    function handleClick() {
        setOpen(!open)
    }

    function handleClose() {
        setOpen(false)
    }

    return (
        <div>
            {open && (
                <List horizontalAlign="left" verticalAlign="bottom" open={open} onClick={handleClose}>
                    <ListItem>👨‍💻 Profile</ListItem>
                    <ListItem>📁 My account</ListItem>
                    <Divider/>
                    <ListItem disabled>🔙 Logout</ListItem>
                </List>
            )}
            <Button onClick={handleClick} active={open} styleName='startButton'>
                <Tooltip styleName='toolTipOverflow' text="No, this will never finish loading 🤷‍">
                    <Hourglass size={16} />Start
                </Tooltip>
            </Button>
        </div>
    )
}

const Header = () =>
    <div styleName='headerBar'>
        {/*<ResetStyles/>*/}
        <ThemeProvider theme={themes.water}>
            <AppBar>
                <Toolbar styleName='toolBar'>
                    <Menu/>
                    <Divider vertical size="lg" styleName='verticalLine'/>
                    <div styleName='headerButtonGroup'>
                        <Button onClick={()=>location.href='https://github.com/harrisonxia'}><span styleName='buttonText'>Github</span></Button>
                        <Button onClick={()=>location.href='https://www.linkedin.com/in/harrison-xia'}><span styleName='buttonText'>LinkedIn</span></Button>
                        <Button><span styleName='buttonText'>Contact</span></Button>
                        <Button><span styleName='buttonText'>Resume</span></Button>
                        <Button><span styleName='buttonText'>Project</span></Button>
                    </div>
                    {/*<TextField placeholder="Search..." width={150} style={{marginLeft: 4}}/>*/}
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    </div>

export default Header