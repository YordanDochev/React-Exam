import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import useForm from '../../hooks/useForm';

const initialValues = {

    title: "",
    price: "",
    mainPhoto: "",
    secondPhoto: "",
    thirdPhoto: "",
    address: "",
    description: "",
    types: "",
    meters: "",
    rooms: "",
    baths: "",
    location: "",
}

export default function FormEstate({
    createSubmitHandler
}) {

    const { values, onChangeHandler, onSubmit } = useForm(initialValues, createSubmitHandler)

    return (
        <Form onSubmit={onSubmit}>
            <Row className="mb-3">
                <Form.Group className="mb-3" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control name="title" placeholder="Appartment with 2 rooms, California" onChange={onChangeHandler} value={values.title} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Main Photo</Form.Label>
                    <Form.Control name="mainPhoto" placeholder="Inster Link Here" onChange={onChangeHandler} value={values.mainPhoto} />
                </Form.Group>
                <Form.Group as={Col} >
                    <Form.Label>Photo</Form.Label>
                    <Form.Control name="secondPhoto" placeholder="Inster Link Here" onChange={onChangeHandler} value={values.secondPhoto} />
                </Form.Group>

                <Form.Group as={Col} >
                    <Form.Label>Photo</Form.Label>
                    <Form.Control name="thirdPhoto" placeholder="Inster Link Here" onChange={onChangeHandler} value={values.thirdPhoto} />
                </Form.Group>

            </Row>
            <Row>
                <Form.Group className="mb-3" >
                    <Form.Label>Address</Form.Label>
                    <Form.Control name="address" placeholder="1234 Main St" onChange={onChangeHandler} value={values.address} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} >
                    <Form.Label>Metters</Form.Label>
                    <Form.Control type="number" name="meters" placeholder="m²" onChange={onChangeHandler} value={values.meters} />
                </Form.Group>

                <Form.Group as={Col} >
                    <Form.Label>Room</Form.Label>
                    <Form.Control type="number" name="rooms" placeholder="Number" onChange={onChangeHandler} value={values.rooms} />
                </Form.Group>

                <Form.Group as={Col} >
                    <Form.Label>Bath</Form.Label>
                    <Form.Control type="number" name="baths" placeholder="Number" onChange={onChangeHandler} value={values.baths} />
                </Form.Group>


            </Row>
            <Row className="mb-3">
                <Form.Label>Description</Form.Label>



                <Form.Control
                    as="textarea"
                    placeholder="Describe your estate here"
                    style={{ maxWidth: '620px', marginLeft: '12px', height: "100px" }}
                    name="description"
                    onChange={onChangeHandler}
                    value={values.description}
                />

            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} >
                    <Form.Label>Type</Form.Label>
                    <Form.Select name="types" onChange={onChangeHandler} value={values.types}>
                        <option value="">Chose Type</option>
                        <option value="Villa">Villa</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Office">Office</option>
                        <option value="Garage">Garage</option>
                    </Form.Select>

                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="price" placeholder='$ 100,000' onChange={onChangeHandler} value={values.price} />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-3" >
                    <Form.Label>Location</Form.Label>
                    <Form.Control name="location" placeholder="County, City" onChange={onChangeHandler} value={values.location} />
                </Form.Group>
            </Row>
            <Row>

                <Button type="submit" variant="primary" size="lg" active>
                    SUBIMT
                </Button>
            </Row>
        </Form>
    )
}