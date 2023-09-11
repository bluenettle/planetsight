import { Col, Card, CardHeader, CardBody, Table } from 'reactstrap';
import { selectDisplayedEntry } from './knowledgebaseSlice';
import { useSelector } from 'react-redux';

const PlantInfoCard = () => {
    const item = useSelector(selectDisplayedEntry);

    return (
        <Col md='8' className='mx-auto'>
            <Card>
                <CardHeader style={{ backgroundColor: "#231D1A" }}>
                    <h4>{item.name}</h4>
                </CardHeader>
                <CardBody>
                    <Col md='6' className='mx-auto mb-3'>
                        <img src={item.image} className='img-fluid' alt={item.name} />
                    </Col>
                    <Table style={{borderTop: '1px solid gray', paddingTop: '30px'}} borderless>
                        <tr>
                            <th>Name</th>
                            <td>{item.name}</td>
                        </tr>
                        <tr>
                            <th>Classification</th>
                            <td>{item.classification}</td>
                        </tr>
                        <tr>
                            <th>Safety info</th>
                            <td>{item.tags.map(item => `${item}, `)}</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>{item.description}</td>
                        </tr>
                    </Table>

                </CardBody>
            </Card>
        </Col>
    );
};

export default PlantInfoCard;