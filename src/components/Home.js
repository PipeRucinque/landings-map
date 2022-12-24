import React, { useState, useEffect } from 'react'

export default function Home() {
    const [img, setImg] = useState("")

    useEffect(() => {
    handleImage()
    }, [])

    const handleImage = async() => {
        try {
            const apiKey = process.env.REACT_APP_API_KEY
            console.log(apiKey)
            const nasaFetch = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            const fetchJson = await nasaFetch.json()
            setImg(fetchJson)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Home</h1>
            <img src={img.url} alt={img.title}/>
        </div>
    )
}
