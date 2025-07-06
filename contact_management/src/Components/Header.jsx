import React from 'react';
import { Container } from 'reactstrap';
function Header() {
    return (
        <header className="bg-primary text-white py-3  shadow">
            <Container  fluid  className="text-center">
                <h1 className="mb-0">Contact Management System</h1>
            </Container>
        </header>
    );
}
export default Header;