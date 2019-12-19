import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Container } from 'reactstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../css/add-car.css';


export class AddCar extends Component {
    static displayName = AddCar.name;

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <h3 as={Row} className='header-style'>Add a Car</h3>
            
                <Form as={Row} className="display-grid">
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridMake">
                            <Form.Label>Make</Form.Label>
                            <Form.Control type="number"
                                min="1900"
                                max="2099"
                                step="1"
                                placeholder="Make" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridModel">
                            <Form.Label>Model</Form.Label>
                            <Form.Control placeholder="Model" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridNumDoors">
                            <Form.Label>Number of doors</Form.Label>
                            <Form.Control type="number" placeholder="Number of doors" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridNumWheels">
                            <Form.Label>Number of wheels</Form.Label>
                            <Form.Control type="number" placeholder="Number of wheels" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEngine">
                            <Form.Label>Engine</Form.Label>
                            <Form.Control placeholder="Engine"/>
                        </Form.Group>


                        <Form.Group as={Col} controlId="formGridBodyType">
                            <Form.Label>Body type</Form.Label>
                            <Form.Control placeholder="Body type" />
                        </Form.Group>
                    </Form.Row>


                    <Button variant="primary" type="submit" className="button-style">
                        Add
                    </Button>
                </Form>
            </div>
        );
    }

}
