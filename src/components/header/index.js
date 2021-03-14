import React from 'react'

import { A } from 'hookrouter'

import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap'

export function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <A href="/" className="navbar-brand">
                Company Name
            </A>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <A href="/" className="nav-link">
                        Home
                    </A>
                    <A href="asdf" className="nav-link">
                        Link
                    </A>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <A href="asdf" className="dropdown-item">
                            Option 1
                        </A>
                        <A href="asdf" className="dropdown-item">
                            Option 2
                        </A>
                        <A href="asdf" className="dropdown-item">
                            Option 3
                        </A>
                        <NavDropdown.Divider />
                        <A href="asdf" className="dropdown-item">
                            Separated link
                        </A>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
