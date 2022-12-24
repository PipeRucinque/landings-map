import React from 'react'
import {Button, Card, Col, Row} from 'react-bootstrap/';
import PopOver from './PopOver';

function LandingPost(props) {
  // console.log("landingPost:", props.forMap);

if(!props.landingMass.length) return null
return (
    <Row xs={1} md={4} className="g-4">
      {props.landingMass.map((landing) => (
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{landing.name}</Card.Title>
              <Card.Text>
                {!landing.fall ? <p>Fallen</p> : null}
              </Card.Text>

            <PopOver forMap={landing}/>  

            <Button variant="outline-danger" onClick={() => props.removeLanding(landing._id)}>Delete</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default LandingPost