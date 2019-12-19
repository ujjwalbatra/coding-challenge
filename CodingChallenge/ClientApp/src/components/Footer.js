import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export class Footer extends Component {
    static displayName = NavBar.name;

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <nav class="navbar fixed-bottom navbar-light bg-light">
                <a class="navbar-brand" href="#">Designed by Ujjwal Batra</a>
            </nav>
        );
    }
}


