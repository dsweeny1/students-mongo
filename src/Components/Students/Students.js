import React from 'react'
import StudentCard from '../StudentCard/StudentCard'
import './Students.css'
import PropTypes from 'prop-types';

const Students = ({ students, deleteStudent }) => {
    const studentCards = students.map(student => {
        return (
            <section>
                <StudentCard 
                    image={student.image}
                    name={student.name}
                    favoriteBands={student.favoriteBands}
                    favoriteFoods={student.favoriteFoods}
                    pets={student.pets}
                    location={student.location}
                    deleteStudent={deleteStudent}
                    id={student._id}
                    key={student._id}
                    />
            </section>
        )
    })
    return (
        <section className='card-grid'>
            {studentCards}
        </section>
    )
}

export default Students

Students.propTypes = {
    students: PropTypes.arrayOf(PropTypes.object),
    deleteStudent: PropTypes.func.isRequired
}