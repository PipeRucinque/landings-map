import React from 'react'
import {Button, OverlayTrigger}  from 'react-bootstrap/';
import Mapa from './Mapa'

function PopOver(props) {
  // console.log('Popover:', props.forMap);
  return (
    <OverlayTrigger trigger="click" placement="right" overlay={<Mapa forMap={props.forMap}/>}>
        <Button variant="outline-success">Show on Map</Button>
    </OverlayTrigger>
  )
}

export default PopOver