import { Col, Card, CardHeader, CardBody } from 'reactstrap';

const PlantInfoCard = ({item}) => {
    return (
        <Col md='7'>
            <Card>
                <CardHeader>
                    <h4>{item.name}</h4>
                </CardHeader>
                <CardBody>
                    <img src={item.image} alt={item.name}/>
                </CardBody>
            </Card>
        </Col>
    );
};

export default PlantInfoCard;