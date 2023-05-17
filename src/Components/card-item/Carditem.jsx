import React from 'react'

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Card from 'react-bootstrap/Card';
import './Carditem.css'





const Carditem = (props) => {

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Détails</Popover.Header>
      <Popover.Body>

        {props.oeuvre.detail}
      </Popover.Body>
    </Popover>
  );

  return (

    <div >

      <Card className="card">
        <Card.Img variant="top" src={props.oeuvre.imageUrl} />
        <Card.Body>
          <Card.Title>{props.oeuvre.titre}</Card.Title>
          <Card.Text>
            {props.oeuvre.auteur} - {props.oeuvre.annee}
          </Card.Text>
          

        </Card.Body>
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button className="button" variant="success" >Plus de détails</Button>
          </OverlayTrigger>
      </Card>

      {/* <img alt="" src={props.oeuvre.imageUrl} className='image'></img>
      <h1>{props.oeuvre.titre}</h1>
      <p>{props.oeuvre.auteur} - {props.oeuvre.annee}</p>

       */}

    </div>
  )
}

export default Carditem