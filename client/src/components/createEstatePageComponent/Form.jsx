import style from './CreateEstate.module.css'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function FormEstate() {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div
                        className="text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 600 }}
                    >
                        <h1 className="mb-3">Estate Parameters</h1>
                    </div>
                    <div className={`col-md-6 ${style.createForm}`}>
                        <div className="wow fadeInUp" data-wow-delay="0.5s" >

                            {/* <form>
                                
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="subject"
                                                placeholder="Username"
                                            />
                                            <label htmlFor="subject">Username</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="First Name"
                                            />
                                            <label htmlFor="name">First Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Last Name"
                                            />
                                            <label htmlFor="email">Last Name</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="subject"
                                                placeholder="Password"
                                            />
                                            <label htmlFor="subject">Password</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="subject"
                                                placeholder=">Repeat Password"
                                            />
                                            <label htmlFor="subject">Repeat Password</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </form> */}
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control placeholder="Appartment with 2 rooms, California" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Image 1 <i>Required</i></Form.Label>
                                        <Form.Control placeholder="Inster Link Here" />
                                    </Form.Group>
                                    <Form.Group as={Col} >
                                        <Form.Label>Image 2</Form.Label>
                                        <Form.Control type="img2" placeholder="Inster Link Here" />
                                    </Form.Group>

                                    <Form.Group as={Col} >
                                        <Form.Label>Image 3</Form.Label>
                                        <Form.Control type="password" placeholder="Inster Link Here" />
                                    </Form.Group>

                                </Row>
                                <Row>
                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control placeholder="1234 Main St" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>Metters</Form.Label>
                                        <Form.Control />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>Room</Form.Label>
                                        <Form.Control />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Bath</Form.Label>
                                        <Form.Control />
                                    </Form.Group>


                                </Row>
                                <Row className="mb-3">
                                    <FloatingLabel controlId="floatingTextarea2" label="Comments" >
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Leave a comment here"
                                            style={{ height: '100px' }}
                                        />
                                    </FloatingLabel>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Type</Form.Label>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </Form.Select>

                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                </Row>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}