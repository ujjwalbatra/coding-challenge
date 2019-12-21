import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import '../css/home.css';
import { Redirect } from 'react-router-dom'


export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);

        this.state = {
            addCar: false,
        }
    }

    handleAddCar() {
        this.setState({addCar: true})
    }

  
    render () {

        if (this.state.addCar === true) {
            return <Redirect to="/add-car" />
        }
            return (
            <React.Fragment>
                <Dropdown>
                    <Dropdown.Toggle variant='success' id='dropdown-basic'>
                        Select a vehicle to add
                    </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={this.handleAddCar.bind(this)}>Car</Dropdown.Item>
                        <Dropdown.Item className='disabled'>Boat (coming soon...)</Dropdown.Item>
                        <Dropdown.Item className='disabled'>Bike (coming soon...)</Dropdown.Item>
                    </Dropdown.Menu>

                </Dropdown>
            </React.Fragment>
        );
    }

}
