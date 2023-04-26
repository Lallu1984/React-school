import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col, Button, Collapse} from 'react-bootstrap';  
import img1 from './pariis.jpg';  
function Card4() { 
    const [open, setOpen] = useState(false);
  return (  
    <div className="card1">  
        <Container className='p-4'>  
            <Col md="4">  
    <Card>  
        <Card.Img variant="top" src={img1} />  
        <Card.Body>  
        <Card.Title><h2>Prantsusmaa</h2>
          <br/>
          <p>Pealinn: Pariis</p>
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
        Pariis on linn, millel on igaühe jaoks mingi tähendus. Pariis oli esimene linn Euroopas, mis 1828 aastal hakkas oma kuulsat avenüüd Champs de Elysees’d õlilampidega valgustama ning sellest alates peetakse Pariisi Valguse linnaks. Aga Pariis on ka kultuuri ja kunsti linn, moe ja gurmee, armastuse ja romantika pealinn.
        Jah, ükskõikseks ei jäta Pariis kedagi. Pariis kui armastuse ja romantika sümbol. Pariis kui üks maailma suurimaid kunstikeskusi. Pariis kui maailma moepealinn. Pariis kui Prantsuse gurmee keskus.
        </div>
      </Collapse>  
        </Card.Body>  
    </Card>  
        </Col>  
        </Container>  
    </div>  
  );  
}  
export default Card4;  