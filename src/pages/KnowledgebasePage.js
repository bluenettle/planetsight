import KnowledgebaseMenu from "../features/knowledgebase/KnowledgebaseMenu";
import PlantInfoCard from "../features/knowledgebase/PlantInfoCard";
import { Row, Container } from 'reactstrap';

const KnowledgebasePage = () => {


    return (
        <Container>
            <Row className="row-content">
                <KnowledgebaseMenu/>
                <PlantInfoCard/>
            </Row>
        </Container>
    );
};

export default KnowledgebasePage;