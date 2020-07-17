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
        addSmurf(smurfInfo)
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
                    <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={smurfInfo.name}
                    onChange={handleChanges}
                    />
                </label><br/>
                <label htmlFor='name'>
                    <input
                    type='number'
                    placeholder='Age'
                    name='age'
                    value={smurfInfo.age}
                    onChange={handleChanges}
                    />
                </label><br/>
                <label htmlFor='height'>
                    <input
                    type='number'
                    placeholder='Height'
                    name='height'
                    value={smurfInfo.height}
                    onChange={handleChanges}
                    />
                </label><br/>

            <button>Add Smurf</button>
            </form>

        </div>
    )
}


export default SmurfForm