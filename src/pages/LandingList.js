import React, {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap/';
import axios from 'axios'

const landingsEndPoint = `${process.env.REACT_APP_ENDPOINT_DEPLOYED}/api/astronomy/landings`

function LandingList() {
    const [landingList, setLandingList] = useState([])
    console.log('LandingList.js......', landingList[0]);

    useEffect(() => {
        async function getAllLandings() {
            const {data} = await axios.get(landingsEndPoint);
            setLandingList(data)
        }
        getAllLandings();
      }, []);

    return (
    <>
        <h2>Landing list page</h2>

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Mass</th>
                    <th>Date</th>
                    <th>Geolocation</th>
                </tr>
            </thead>
                <tbody>
                    {landingList.map((landing) => (
                    <tr key={landing._id}>
                        <td>{landing.id}</td>
                        <td>{landing.name}</td>
                        <td>{landing.recclass}</td>
                        <td>{landing.mass} Kg</td>
                        <td>{landing.year}</td>
                        {!landing.geolocation ? null : (
                            <td>Latitude: {landing.geolocation.latitude} - Longitude: {landing.geolocation.longitude}</td>
                        )}
                    </tr>
                    ))}
                </tbody>
        </Table>        
    </>
    )
}

export default LandingList