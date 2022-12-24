import React, { useState } from 'react';
import {Button, Offcanvas} from 'react-bootstrap/';
import LandingList from '../pages/LandingList';

const OffMenu = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
        <Button variant="primary" onClick={handleShow} className="me-2">
            Landings Menu
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Landings Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <label>Landing Mass: 
                    <input 
                        type="number"          
                        onChange={(e) => props.handleMassInput(e.currentTarget.value)}
                        onKeyDown={props.getLandingMass}
                    />
                </label>
                <button onClick={props.getLandingMass} >Search</button>

                <a href="/landings/list">Landing List</a>

            </Offcanvas.Body>
        </Offcanvas>
    </>
    )
}

export default OffMenu