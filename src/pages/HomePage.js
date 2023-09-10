import { Container, Row } from 'reactstrap';
import Announcements from "../features/announcements/Announcements";
import Feed from '../features/feed/Feed';
import Minimap from '../components/Minimap';

const HomePage = () => {
    return (
        <Container>
            <Announcements />
            <Row className='row-content'>
                <Feed />
                <Minimap/>
            </Row>
        </Container>
    );
};

export default HomePage;