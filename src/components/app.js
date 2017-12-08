import React from 'react';
import Table from './table';

const students = [
    {
        name: 'Peter Parker',
        course: 'React',
        grade: 85
    },
    {
        name: 'Sangwoo Kim',
        course: 'PHP',
        grade: 100
    },
    {
        name: 'James Han',
        course: 'Javascript',
        grade: 78
    }
]

export default () => (
    <div className='container'>
        <h1>Student Grade Table</h1>
        <Table data={students}/>
    </div>
)