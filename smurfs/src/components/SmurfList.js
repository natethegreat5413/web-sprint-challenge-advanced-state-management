import React, { useContext } from 'react'
import { SmurfContext } from '../contexts/SmurfContext'


const SmurfList = () => {
        const smurf = useContext(SmurfContext)

    return (
        <div className='list'>
            <h2>Smurf Villiage Directory</h2>
            {smurf.map(smurfs => (
                <div className='card'>
                    <p>Name: {smurfs.name}</p>
                    <p>Age: {smurfs.age}</p>
                    <p>Height: {smurfs.height}</p>
                </div>
            ))}
        </div>
    )
}

export default SmurfList