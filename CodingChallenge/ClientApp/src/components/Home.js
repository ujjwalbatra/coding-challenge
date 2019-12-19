import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom';
import '../css/home.css';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <React.Fragment>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select a vehicle to add
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item tag={Link} to="/add-car">Car</Dropdown.Item>
                        <Dropdown.Item className='disabled'>Boat (coming soon...)</Dropdown.Item>
                        <Dropdown.Item className='disabled'>Bike (coming soon...)</Dropdown.Item>
                    </Dropdown.Menu>

                </Dropdown>
            </React.Fragment>
        );
    }

}
