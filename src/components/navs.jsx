import * as React from 'react'
import styles from './component.css'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

const CustomizedNavBar = () => {
    // className={styles.active} activeclassname={styles.inactive}
    return (
        <div className={styles.navBar}>
            <Navbar expand="lg">
                <Navbar.Brand href="#home" style={{color: 'white', textDecoration: 'none'}}>
                    React-Bootstrap
                </Navbar.Brand>
                {/*<Navbar.Toggle aria-controls="basic-navbar-nav"/>*/}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" style={{color: 'white', textDecoration: 'none'}}>Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <div className={styles.transparent}>
                            <NavDropdown title="Dropdown">
                                <NavDropdown.Item href="#action/3.1" style={{color: 'white', textDecoration: 'none'}}>Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another
                                    action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                {/*<NavDropdown.Divider/>*/}
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )

}

export default CustomizedNavBar
