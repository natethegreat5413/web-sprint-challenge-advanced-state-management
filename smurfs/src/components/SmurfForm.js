import React, {useState, useContext} from 'react'
import axios from 'axios'
import { FormContext } from '../contexts/FormContext'

const SmurfForm = () => {
    const [smurfInfo, setSmurfInfo] = useState('')

    const addSmurf = useContext(FormContext)

    const handleChanges = e => {
        e.preventDefault();
        setSmurfInfo({
            ...smurfInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = e => {
        e.preventDefault();
        addSmurf(smurfInfo)
        axios
            .post('http://localhost:3333/smurfs', smurfInfo)
            .then(res => {
                setSmurfInfo(res.data)
            })
            .catch(err => console.log('there was an error', err))
    }

    return(

        <div className='form-wrap'>
            <form onSubmit={submitForm}>
                <label htmlFor='name'>
                    Name
                    <input
                    type='text'
                    name='name'
                    value={smurfInfo.name}
                    onChange={handleChanges}
                    />
                </label>
                <label htmlFor='name'>
                    Age
                    <input
                    type='number'
                    name='age'
                    value={smurfInfo.age}
                    onChange={handleChanges}
                    />
                </label>
                <label htmlFor='height'>
                    Height
                    <input
                    type='number'
                    name='height'
                    value={smurfInfo.height}
                    onChange={handleChanges}
                    />
                </label>
            </form>

        </div>
    )
}


export default SmurfForm