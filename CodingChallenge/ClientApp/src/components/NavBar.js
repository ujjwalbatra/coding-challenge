import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

export class NavBar extends Component {
    static displayName = NavBar.name;

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">CodingChallenge</NavbarBrand>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
