import {
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
    <>
        <Row className='jumbotron mb-0'>
            <Col md={{ size: 1, offset: 1 }}>
                <img src={logo} className='float-start' alt='PlanetSight Logo' />
            </Col>
            <Col md='4' className='align-self-center'>
                <h1>PlanetSight</h1>
            </Col>
        </Row>
        <Navbar className='navbar-dark' expand='md'>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='me-auto' navbar >
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
                            Knowledgebase
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </>
);
};

export default Header;