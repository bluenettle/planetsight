import { useSelector } from "react-redux";
import { useState } from "react";
import { selectEntriesByType } from "./knowledgebaseSlice";
import { ListGroup, ListGroupItem } from "reactstrap";

const KnowledgebaseMenuContent = ({type}) => {
    const content = useSelector(selectEntriesByType(type));
    const [ entry, setEntry ] = useState(0);
    
    return (
        <ListGroup flush>
            {content.map(item => {
                return (
                    <ListGroupItem onclick={() => setEntry(item.id)}>{item.name}</ListGroupItem>
                );
            })}
        </ListGroup>
    );
};

export default KnowledgebaseMenuContent;