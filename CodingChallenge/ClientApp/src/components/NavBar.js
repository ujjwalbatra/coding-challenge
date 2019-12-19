import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

export class NavBar extends Component {
    static displayName = NavBar.name;

    render () {
        return (
            <header>
                <Navbar className='navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3' light>
                    <Container>
                        <NavbarBrand tag={Link} to='/'>CodingChallenge</NavbarBrand>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
