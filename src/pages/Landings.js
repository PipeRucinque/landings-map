import React, { useEffect, useState } from 'react'
import LandingPost from '../components/LandingPost'
import OffMenu from '../components/OffMenu'
import WorldMap from '../components/WorldMap'

const landingsEndPoint = `${process.env.REACT_APP_ENDPOINT_DEPLOYED}/api/astronomy/landings`

function Landings() {
  const [data, setData] = useState({})
  const [massInput, setMassInput] = useState()
  const [landingMass, setLandingMass] = useState([])

  console.log(data);

  const getData = async () => {
    try {
      const data = await (await fetch(landingsEndPoint)).json()
      setData(data)
      // console.log("landing:", data);
    } catch(error) {
      console.log('Error en el fetch de la data', error);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const getLandingMass = async() => {
    try {
      const landingMassData = await (await fetch(`${landingsEndPoint}/mass/${massInput}`)).json()
      setLandingMass(landingMassData, ...landingMass)
      setMassInput("")
    } catch (error) {
      console.log("Error en el landing by mass", error);
    }
  }
  useEffect(() => {
    getLandingMass();
  }, [])
  
  const handleMassInput = (massInput) => setMassInput(massInput)  
  
  const handleRemove = (_id) => {
    const lessLandingsMass = landingMass.filter((L) => L._id !== _id);
    setLandingMass(lessLandingsMass)
  };

  return (
    <>
    <h1>Landing Page</h1>
    <OffMenu  
      handleMassInput={handleMassInput}
      getLandingMass={getLandingMass}
    />
    {/* !landingMass es lo mismo que decir landingMass === [] */}
    {!landingMass ? null : <LandingPost landingMass={landingMass} removeLanding={handleRemove} forMap={data}/>}

    {/* {(Object.entries(data).length === 0) ? null : <WorldMap data={data}/>} */}
    </>
  )
}

export default Landings