import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col, Button, Collapse} from 'react-bootstrap';  
import img1 from './rooma.jpg';  
function Card5() { 
    const [open, setOpen] = useState(false);
  return (  
    <div className="card1">  
        <Container className='p-4'>  
            <Col md="4">  
    <Card>  
        <Card.Img variant="top" src={img1} />  
        <Card.Body>  
        <Card.Title><h2>Itaalia</h2>
          <br/>
          <p>Pealinn: Rooma</p>
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
        Rooma (itaalia ja ladina keeles Roma) on Itaalia pealinn.
        Ta asub Apenniini poolsaarel Tevere (Tiberi) jõe alamjooksul umbes 25 km kaugusel suudmest.[3]
        Rooma nimi tuleb etruskide ruma sugukonna või Tevere etruskikeelse nime Rumon järgi.[3]
        Rooma on Lazio maakonna ja Città metropolitana di Roma Capitale halduskeskus.
        Ta jääb Itaalia kahe väga erineva osa – arenenuma, eduka Põhja-Itaalia ja mahajäänuma, põllumajandusliku Lõuna-Itaalia – piirile.
        </div>
      </Collapse>  
        </Card.Body>  
    </Card>  
        </Col>  
        </Container>  
    </div>  
  );  
}  
export default Card5;  