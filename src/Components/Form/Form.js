import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.css'
import PropTypes from 'prop-types';

const Form = ({ addStudent }) => {
    const [name, setName] = useState('')
    const [favoriteBands, setFavoriteBands] = useState('')
    const [favoriteFoods, setFavoriteFoods] = useState('')
    const [location, setLocation] = useState('')
    const [pets, setPets] = useState('')
    const [image, setImage] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const submitNewStudent = (event) => {
        event.preventDefault()
        const newStudent = {
            name: name,
            favoriteBands: favoriteBands,
            favoriteFoods: favoriteFoods,
            pets: pets,
            location: location,
            image: image
        }
        if(!name || !favoriteBands || !favoriteFoods || !pets || !location) {
            setError('Please Add Student Information')
        } else {
            setError('')
            navigate('/')
            addStudent(newStudent)
            clearInputs()
        }
    }

    const clearInputs = () => {
        setName('')
        setFavoriteBands('')
        setFavoriteFoods('')
        setPets('')
        setLocation('')
        setImage('')
    }

        return (
            <form>
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <label>*Required</label>
                <input
                    type='text'
                    placeholder='Favorite Bands'
                    name='favoriteBands'
                    value={favoriteBands}
                    onChange={event => setFavoriteBands(event.target.value)}
                />
                <label>*Required</label>
                <input
                    type='text'
                    placeholder='Favorite Foods'
                    name='favoriteFoods'
                    value={favoriteFoods}
                    onChange={event => setFavoriteFoods(event.target.value)}
                />
                <label>*Required</label>
                <input
                    type='text'
                    placeholder='Pets'
                    name='pets'
                    value={pets}
                    onChange={event => setPets(event.target.value)}
                />
                <label>*Required</label>
                <input
                    type='text'
                    placeholder='Location'
                    name='location'
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                />
                <label>*Required</label>
                <input
                    type='text'
                    placeholder='Image'
                    name='image'
                    value={image}
                    onChange={event => setImage(event.target.value)}
                />
                <label>*Optional</label>
                <button className='submit-button' onClick={(event) => submitNewStudent(event)}>Add Student</button>
                <p>{error}</p>
            </form>
        )
}

export default Form

Form.propTypes = {
    addStudent: PropTypes.func.isRequired
}