import { Container, Row, Col } from 'reactstrap';
import logo from '../assets/img/PSI.png';

const Header = () => {
    return (
    <Container className='jumbotron'>
        <Row>
            <Col md='2'>
                <img src={logo} className='float-start' alt='PlanetSight Logo'/>
            </Col>
            <Col md={{size:'6', offset: '2'}}>
                <h1>PlanetSight</h1>
            </Col>
        </Row>
    </Container>
    );
};

export default Header;