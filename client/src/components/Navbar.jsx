import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";

import Auth from "../utils/auth";

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    if (Auth.loggedIn()) {
      setUserId(Auth.getProfile().data._id)
      
    } else {
      setUserId(null)
    }
  }, [Auth.loggedIn()])

  return (
    <>
      <Navbar expand="lg" id="navbar">
        <Container>
          <div className="d-flex align-items-center">
            <Navbar.Brand as={Link} to="/">
              <img src='./Whatthefork.png' width="150px" alt="WhatTheFork Logo"></img>
            </Navbar.Brand>

            <h1>What the Fork?</h1>
          </div>
          

          <Navbar.Toggle aria-controls="navbar" aria-expanded="false"/>
          <Navbar.Collapse id="navbar" className="d-flex justify-content-end">
            <div>
              <Nav>
                <Nav.Link as={Link} to="/search">
                  Search Recipes
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                {/* if user is logged in show saved recipes, create recipes, profile and logout */}
                {Auth.loggedIn() ? (
                  <>
                    <Nav.Link as={Link} to="/create">
                      Create Recipe
                    </Nav.Link>
                    <Nav.Link as={Link} to="/saved">
                      Favorites
                    </Nav.Link>
                    <Nav.Link as={Link} to={`/profile/${userId}`}>
                      Profile
                    </Nav.Link>

                    
                    <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link onClick={() => setShowModal(true)}>
                      Login/Sign Up
                    </Nav.Link>
                  </>
                )}
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
