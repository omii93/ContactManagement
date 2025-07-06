import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
function Menus() {
    return (
        <ListGroup flush>
            <ListGroupItem tag={Link} to="/" action>
                Home
            </ListGroupItem>
            <ListGroupItem tag={Link} to="/add-contact" action>
                Add Contact
            </ListGroupItem>
            <ListGroupItem tag={Link} to="/view-contacts" action>
                View Contacts
            </ListGroupItem>
        </ListGroup>
    );
}
export default Menus;