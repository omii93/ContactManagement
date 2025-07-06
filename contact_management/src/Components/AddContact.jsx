import React, { useState, useEffect } from 'react';
import {
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import base_url from '../Api/Service';
import { toast } from 'react-toastify';

function AddContact() {
    const navigate = useNavigate();

    const [contact, setContact] = useState({
        name: '',
        phone: '',
        email: '',
        address: ''
    });

    useEffect(() => {
        document.title = 'Add Contact';
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, phone, email, address } = contact;
        if (!name || !phone || !email || !address) {
            toast.warn('All fields are required!');
            return;
        }

        try {
            await axios.post(`${base_url}/contacts`, contact);
            toast.success('Contact added successfully!');
            navigate('/view-contacts');
        } catch (error) {
            toast.error('Failed to add contact');
        }
    };

    return (
        <Container className="mt-4">
            <Card className="shadow">
                <CardBody>
                    <CardTitle tag="h3" className="mb-4">
                        Add New Contact
                    </CardTitle>

                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter name"
                                value={contact.name}
                                onChange={handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="phone">Phone</Label>
                            <Input
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="Enter phone"
                                value={contact.phone}
                                onChange={handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter email"
                                value={contact.email}
                                onChange={handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input
                                type="textarea"
                                name="address"
                                id="address"
                                placeholder="Enter address"
                                value={contact.address}
                                onChange={handleChange}
                                rows="4"
                            />
                        </FormGroup>

                        <Button type="submit" color="primary">
                            Add Contact
                        </Button>
                        <Button
                            type="button"
                            color="secondary"
                            className="ms-2"
                            onClick={() => navigate('/')}
                        >
                            Cancel
                        </Button>
                    </Form>
                </CardBody>
            </Card>
        </Container>
    );
}

export default AddContact;
