import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {Redirect} from 'react-router-dom';
import '../css/home.css';
import { AddCar } from './AddCar.js';
import { Link } from 'react-router-dom'


export class Home extends Component {
    static displayName = Home.name;

    handleAddCar() {
        return <Redirect to="/add-car" />;
    }

    render () {
        return (
            <React.Fragment>
                <Dropdown>
                    <Dropdown.Toggle variant='success' id='dropdown-basic'>
                        Select a vehicle to add
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item component={Link} to='\add-car'>Car</Dropdown.Item>
                        <Dropdown.Item className='disabled'>Boat (coming soon...)</Dropdown.Item>
                        <Dropdown.Item className='disabled'>Bike (coming soon...)</Dropdown.Item>
                    </Dropdown.Menu>

                </Dropdown>
            </React.Fragment>
        );
    }

}
