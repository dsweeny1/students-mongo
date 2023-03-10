import './App.css';
import React, {useState, useEffect, Fragment} from 'react'
import { Routes, Route } from 'react-router-dom'
import Students from '../Students/Students';
import Form from '../Form/Form'
import Header from '../Header/Header';
import Error from '../Error/Error'

function App() {
  const [students, setStudents] = useState([])
  const [error, setError] = useState(false)

  const getStudents = async () => {
    const url = (`http://localhost:3000/api/v1/students`)
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (!response.ok) {
        setError(true)
        throw new Error(response.status)
      }
      setStudents(data)
    } catch(error) {
      console.log({message: error.message})
    }
  }

  useEffect(() => {
    getStudents()
  }, [])

  const deleteStudent = (id) => {
    const deletedStudent = students.filter(student => student._id !== id)
    try {
      const response = fetch(`http://localhost:3000/api/v1/students/${id}`, {
        'method': 'DELETE'
      });
      if (!response.ok) {
        throw new Error(response.status)
      }
      const newData = response.json();
      return newData;
    }
    catch (error) {
      console.log(error.message)
  };
    setStudents(deletedStudent)
  }

  const addStudent = (newStudent) => {
    console.log(newStudent)
    try {
      const response = fetch('http://localhost:3000/api/v1/students', {
        method: 'POST',
        body: JSON.stringify({
          name: newStudent.name,
          favoriteBands: newStudent.favoriteBands,
          favoriteFoods: newStudent.favoriteFoods,
          pets: newStudent.pets,
          location: newStudent.location,
          image: newStudent.image
        }),
        headers: {
          'Content-Type': 'application/JSON'
        }});
      if (!response.ok) {
        throw new Error(response.status)
      }
      const data = response.json();
      return data;
    }
    catch (error) {
      console.log({message: error.message})
    }
    setStudents([...students, newStudent])
  };

  return (
    <div className="App">
      <Header />
      <Fragment>
        <Routes>
          <Route 
          path='/'
              element={!error ? <Students 
              students={students}
              deleteStudent={deleteStudent} 
              /> : <Error />}
          />
          <Route 
          path='students/form'
              element={!error ? <Form 
                addStudent={addStudent}
                /> : <Error />}
          />
          <Route 
          path='*' element={<Error />}
          />
        </Routes>
      </Fragment>
   </div>
  );
}

export default App;
