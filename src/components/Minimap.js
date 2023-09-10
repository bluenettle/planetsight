import placeholderMap from '../assets/img/map_dummy.png';
import { Col, Card, CardBody } from 'reactstrap';

const Minimap = () => {
    return (
        <Col md='5'>
            <Card>
                <CardBody>
                    <img src={placeholderMap} className='img-fluid' alt='photo of a topographic map'/>
                </CardBody>
            </Card>
        </Col>
    );
};

export default Minimap;