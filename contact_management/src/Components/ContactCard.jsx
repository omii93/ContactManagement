import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import base_url from '../Api/Service';
import { toast } from 'react-toastify';
function ContactCard({ contact, refresh }) {
    const navigate = useNavigate();
    const deleteContact = () => {
        axios.delete(`${base_url}/contacts/${contact.id}`).then(
            () => {
                toast.success('Contact deleted');
                refresh();
            },
            () => toast.error('Error deleting contact')
        );
    };
    return (
        <Card className="mb-3">
            <CardBody>
                <CardTitle tag="h5">{contact.name}</CardTitle>
                <CardText>
                    <strong>Phone:</strong> {contact.phone}<br />
                    <strong>Email:</strong> {contact.email}<br />
                    <strong>Address:</strong> {contact.address}
                </CardText>
                <Button color="warning" outline onClick={() => navigate(`/edit-contact/$
{contact.id}`)}>
                    Edit
                </Button>{' '}
                <Button color="danger" outline onClick={deleteContact}>
                    Delete
                </Button>
            </CardBody>
        </Card>
    );
}

export default ContactCard;