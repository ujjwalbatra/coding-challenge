import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../css/add-car.css';
import * as API from '../apiEndpoints';


export class AddCar extends Component {
    static displayName = AddCar.name;

    constructor(props) {
        super(props);

        this.state = {
            make: '',
            model: '',
            num_of_doors: '',
            num_of_wheels: '',
            engine: '',
            body_type: '',
            error: false,
            completed: false
        };

    }


    handleUpdateMake(event) {
        this.setState({ make: event.target.value })
    }

    handleUpdateModel(event) {
        this.setState({ model: event.target.value })
    }

    handleUpdateNumberOfDoors(event) {
        this.setState({ num_of_doors: event.target.value })
    }

    handleUpdateNumberOfWheels(event) {
        this.setState({ num_of_wheels: event.target.value })
    }

    handleUpdateEngine(event) {
        this.setState({ engine: event.target.value })
    }

    handleUpdateBodyType(event) {
        this.setState({ body_type: event.target.value })
    }

    success() {
        this.clearState();
        this.setState({ completed: true })
    }

    failure() {
        this.setState({
            error: true,
            completed: false
        })
    }

    clearState() {
        this.setState({
            make: '',
            model: '',
            num_of_doors: '',
            num_of_wheels: '',
            engine: '',
            body_type: '',
            error: false,
            completed: false
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const url = API.ADD_CAR;
        const data = {
            Make: this.state.make,
            Model: this.state.model,
            NumOfDoors: this.state.num_of_doors,
            NumOfWheels: this.state.num_of_wheels,
            Engine: this.state.engine,
            BodyType: this.state.body_type,
            Type: 'car'
        }

        fetch(url, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(response => {
            const status = response.status;
            if (status === 200) this.success();
            else this.failure();
        });
    }

    
    
    render() {
        const { make, model, num_of_doors, num_of_wheels, engine,
            body_type, error, completed } = this.state;

        return (
            <div>
                <h3 as={Row} className='header-style'>Add a Car</h3>
                {error &&
                    <p className="error">Error! Please check your input...</p>
                }
                {completed &&
                    <p className="success">Car added!</p>
                }
            
                <Form as={Row} className='display-grid'>
                    <Form.Row>
                        <Form.Group as={Col} controlId='formGridMake'>
                            <Form.Label>Make</Form.Label>
                            <Form.Control
                                type='number'
                                min='1900'
                                max='2099'
                                step='1'
                                value={make}
                                placeholder='Make'
                                onChange={this.handleUpdateMake.bind(this)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId='formGridModel'>
                            <Form.Label>Model</Form.Label>
                            <Form.Control
                                value={model}
                                onChange={this.handleUpdateModel.bind(this)}
                                placeholder='Model'
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId='formGridNumDoors'>
                            <Form.Label>Number of doors</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder='Number of doors'
                                value={num_of_doors}
                                onChange={this.handleUpdateNumberOfDoors.bind(this)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId='formGridNumWheels'>
                            <Form.Label>Number of wheels</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder='Number of wheels'
                                value={num_of_wheels}
                                onChange={this.handleUpdateNumberOfWheels.bind(this)}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId='formGridEngine'>
                            <Form.Label>Engine</Form.Label>
                            <Form.Control
                                placeholder='Engine'
                                value={engine}
                                onChange={this.handleUpdateEngine.bind(this)}
                            />
                        </Form.Group>


                        <Form.Group as={Col} controlId='formGridBodyType'>
                            <Form.Label>Body type</Form.Label>
                            <Form.Control
                                placeholder='Body type'
                                value={body_type}
                                onChange={this.handleUpdateBodyType.bind(this)}
                            />
                        </Form.Group>
                    </Form.Row>


                    <Button
                        variant='primary'
                        onClick={this.handleSubmit.bind(this)}
                        className='button-style'
                    >
                        Add
                    </Button>
                </Form>
            </div>
        );
    }

}
