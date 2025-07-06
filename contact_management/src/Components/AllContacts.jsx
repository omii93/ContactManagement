import React, { useEffect, useState } from 'react';
import axios from 'axios';
import base_url from '../Api/Service';
import { toast } from 'react-toastify';
import ContactCard from './ContactCard';
function AllContacts() {
    const [contacts, setContacts] = useState([]);
    const fetchContacts = () => {
        axios.get(`${base_url}/contacts`).then(
            res => setContacts(res.data),
            () => toast.error('Error loading contacts')
        );
    };
    useEffect(() => {
        document.title = 'All Contacts';
        fetchContacts();
    }, []);
    return (
        <div>
            {contacts.length > 0 ? (
                contacts.map(contact => (
                    <ContactCard key={contact.id} contact={contact}
                        refresh={fetchContacts} />
                ))
            ) : (
                <p className="text-center mt-4">No contacts available.</p>
            )}
        </div>
    );
}
export default AllContacts;