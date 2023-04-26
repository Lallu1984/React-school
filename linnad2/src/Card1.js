
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col, Button, Collapse} from 'react-bootstrap';  
import img1 from './berliin.jpeg';  
function Card1() { 
    const [open, setOpen] = useState(false);
  return (  
    <div className="card1">  
        <Container className='p-4'>  
            <Col md="4">  
    <Card>  
        <Card.Img variant="top" src={img1} />  
        <Card.Body>  
        <Card.Title><h2>Saksamaa</h2>
          <br/>
          <p>Pealinn: Berliin</p>
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
        Berliin (saksa keeles Berlin) on Saksamaa pealinn. See on 3,6 miljoni elanikuga Kesk-Euroopa suurim linn ja suuruselt teine linn Euroopa Liidus. Berliin on jaotatud 12 linnarajooniks. Linna pindala on 892 km², sellele jäävad Spree ja Haveli jõgi ning mitmed väiksemad vooluveekogud ja järved.
        Saksamaa suurim linn asub Kesk-Euroopa tasandikul, umbes 70 km kaugusel tänasest Poola piirist.
        </div>
      </Collapse>  
        </Card.Body>  
    </Card>  
        </Col>  
        </Container>  
    </div>  
  );  
}  
export default Card1;  