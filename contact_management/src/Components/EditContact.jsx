import React, { useState, useEffect } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container
} from 'reactstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import base_url from '../Api/Service';
import { toast } from 'react-toastify';

function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  useEffect(() => {
    document.title = 'Edit Contact';

    const fetchContact = async () => {
      try {
        const res = await axios.get(`${base_url}/contacts/${id}`);
        setContact(res.data);
      } catch (error) {
        toast.error('Error loading contact');
      }
    };

    fetchContact();
  }, [id]);

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${base_url}/contacts`, {
        id: parseInt(id),
        ...contact
      });
      toast.success('Contact updated successfully!');
      navigate('/view-contacts');
    } catch (error) {
      toast.error('Failed to update contact');
    }
  };

  return (
    <Container className="mt-4">
      <h3>Edit Contact</h3>

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
          Update Contact
        </Button>
        <Button
          type="button"
          color="secondary"
          className="ms-2"
          onClick={() => navigate('/view-contacts')}
        >
          Cancel
        </Button>
      </Form>
    </Container>
  );
}

export default EditContact;
