import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
const Home = () => {
    const navigate = useNavigate();
    useEffect(() => { document.title = 'Home'; }, []);
    return (
        <Container   fluid className="text-center py-5">
            <h2>Welcome to Contact Management</h2>
            <p>Manage your contacts efficiently.</p>
            <Button color="primary" onClick={() => navigate('/view-contacts')}>
                View Contacts
            </Button>
        </Container>
    );
};
export default Home;