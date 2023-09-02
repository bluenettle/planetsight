import { Row, ListGroup, ListGroupItem } from 'reactstrap';
import { selectAnnouncements } from './announcementSlice';
import { useSelector } from 'react-redux';

const Announcements = () => {

    const announcements = useSelector(selectAnnouncements);
    let content = null;

    if (announcements) {
        content = announcements.map(item => {
            return (
                <ListGroupItem>{item.content}</ListGroupItem>
            );
        })
    } else {
        content = <ListGroupItem>No new announcements.</ListGroupItem>
    }

    return (
        <Row className='row-content'>
        <h4>Announcements</h4>
        <ListGroup>
            {content}
        </ListGroup>
    </Row>
);
};

export default Announcements;