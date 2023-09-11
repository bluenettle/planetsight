import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { selectEntriesByType, setDisplayedEntry } from "./knowledgebaseSlice";
import { ListGroup, ListGroupItem } from "reactstrap";

const KnowledgebaseMenuContent = ({type}) => {
    const content = useSelector(selectEntriesByType(type));
    const [ entry, setEntry ] = useState(0);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (entry) {
            dispatch(setDisplayedEntry(entry));
        }
    }, [entry, dispatch])


    return (
        <ListGroup flush>
            {content.map(item => {
                return (
                    <ListGroupItem onlick={() => setEntry(item.id)}>{item.name}</ListGroupItem>
                );
            })}
        </ListGroup>
    );
};

export default KnowledgebaseMenuContent;