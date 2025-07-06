import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { ToastContainer, Bounce } from 'react-toastify';

import Header from './Components/Header';
import Menus from './Components/Menus';
import Home from './Components/Home';
import AllContacts from './Components/AllContacts';
import AddContact from './Components/AddContact';
import EditContact from './Components/EditContact';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router className="border border-5 border-secondary ">
        {/* ✅ Toast Notifications */}
        <ToastContainer transition={Bounce} theme="colored" />

        <Container fluid className="p-0" >
          {/* ✅ App Header */}
          <Header />

          <Row className="g-0 border" style={{ minHeight: '100vh' }}>
            {/* ✅ Sidebar */}
            <Col
              md={3}
              className="border-end p-4 bg-white d-none d-md-block"
            >
              <Menus />
            </Col>

            {/* ✅ Main Content */}
            <Col xs={12} md={9} className="bg-light p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-contact" element={<AddContact />} />
                <Route path="/edit-contact/:id" element={<EditContact />} />
                <Route path="/view-contacts" element={<AllContacts />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
