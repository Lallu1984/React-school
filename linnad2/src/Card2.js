import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col, Button, Collapse} from 'react-bootstrap';  
import img1 from './london.jpg';  
function Card2() { 
    const [open, setOpen] = useState(false);
  return (  
    <div className="card1">  
        <Container className='p-4'>  
            <Col md="4">  
    <Card>  
        <Card.Img variant="top" src={img1} />  
        <Card.Body>  
        <Card.Title><h2>Suurbritannia</h2>
          <br/>
          <p>Pealinn: London</p>
        </Card.Title>    
        <Button className='btn1'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Kirjeldus
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        London on Suurbritannia ja Inglismaa pealinn, Suurbritannia saare suurim linn ning Rahvaste Ühenduse keskus.
        London on Moskva järel Euroopa suuruselt teine linn, Rotterdami järel Euroopa suuruselt teine sadamalinn ning New Yorgi järel maailma tähtsuselt teine rahandus- ja kaubanduskeskus (vt maailmalinn).
        </div>
      </Collapse>  
        </Card.Body>  
    </Card>  
        </Col>  
        </Container>  
    </div>  
  );  
}  
export default Card2;  