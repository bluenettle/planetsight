import { useState } from 'react';
import {
    Col,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import KnowledgebaseMenuContent from './KnowledgebaseMenuContent';

const KnowledgebaseMenu = () => {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
            <Col md='2' className='mx-4 mt-4'>
            <Accordion open={open} toggle={toggle} stayOpen>
                <AccordionItem>
                    <AccordionHeader targetId="1">Mosses & Algae</AccordionHeader>
                    <AccordionBody accordionId="1">
                        <KnowledgebaseMenuContent type='algae'/>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2">Molds & Fungi</AccordionHeader>
                    <AccordionBody accordionId="2">
                       <KnowledgebaseMenuContent type='fungi'/>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="3">Vascular Plants</AccordionHeader>
                    <AccordionBody accordionId="3">
                       <KnowledgebaseMenuContent type='vascular'/>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
            </Col>
    );
}

export default KnowledgebaseMenu;