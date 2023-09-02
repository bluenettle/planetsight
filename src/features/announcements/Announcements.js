import { Row, ListGroup, ListGroupItem } from 'reactstrap';
import { selectAnnouncements } from './announcementSlice';
import { useSelector } from 'react-redux';

const Announcements = () => {

    const announcements = useSelector(selectAnnouncements);

    if (announcements) {
        announcements.map(item => {
            return (
                <Row className='row-content'>
                    <ListGroup>
                        <ListGroupItem>{item.content}</ListGroupItem>
                    </ListGroup>
                </Row>
            );
        })
    } else {
        return (
            <></>
        );
    }
};

export default Announcements;