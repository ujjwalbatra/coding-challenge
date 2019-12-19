import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavBar } from './NavBar';
import '../css/layout.css';

export class Layout extends Component {
    static displayName = Layout.name;

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <NavBar />
                <Container className='center-everything'>
                    {this.props.children}
                </Container>
            </div>
        );
    }
}
