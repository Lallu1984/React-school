import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col, Button, Collapse} from 'react-bootstrap';  
import img1 from './madrid.jpg';  
function Card3() { 
    const [open, setOpen] = useState(false);
  return (  
    <div className="card1">  
        <Container className='p-4'>  
            <Col md="4">  
    <Card>  
        <Card.Img variant="top" src={img1} />  
        <Card.Body>  
        <Card.Title><h2>Hispaania</h2>
            <br />   
            <p>Pealinn: Madrid</p> 
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
        Madrid (varasem eestikeelne nimekuju Madriid) on Hispaania pealinn, Madridi autonoomse piirkonna ja Madridi provintsi keskus. Linna pindala halduspiires on 605,77 km².
        Elanike arv oli 2009. aastal 3 255 950. Aastal 2005 oli elanikke samadel andmetel ümardatult 3 155 400.
        Madridi linnastus elas 2009. aastal 6,5 miljonit inimest.
        </div>
      </Collapse>  
        </Card.Body>  
    </Card>  
        </Col>  
        </Container>  
    </div>  
  );  
}  
export default Card3;  