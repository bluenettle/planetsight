//can't get the columns in the jumbotron to stop stacking on this. navigation works but i gave up on the formatting for now


import { 
    Container, 
    Row, 
    Col,
    Navbar,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem
    } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/PSI.png';
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Container className='jumbotron'>
            <Row >
                <Col md='2'>
                    <img src={logo} className='float-start' alt='PlanetSight Logo' />
                </Col>
                <Col md={{ size: '6', offset: '2' }}>
                    <h1>PlanetSight</h1>
                </Col>
            </Row>
            <Navbar className='navbar-dark' expand='md'>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='ms-auto' navbar>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                 Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/map'>
                                Map View
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/knowledgebase'>
                                knowledgebase
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;