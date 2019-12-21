import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import '../css/home.css';
import { Link } from 'react-router-dom'


export class Home extends Component {
    static displayName = Home.name;

    render () {
        return (
            <React.Fragment>
                <Dropdown>
                    <Dropdown.Toggle variant='success' id='dropdown-basic'>
                        Select a vehicle to add
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item><Link to="/add-car">Car</Link></Dropdown.Item>
                        <Dropdown.Item className='disabled'>Boat (coming soon...)</Dropdown.Item>
                        <Dropdown.Item className='disabled'>Bike (coming soon...)</Dropdown.Item>
                    </Dropdown.Menu>

                </Dropdown>
            </React.Fragment>
        );
    }

}
