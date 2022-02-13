import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Search from 'Search';

//{"_id":"62003aa7265fe3b27e716c91","Year":2019,"Term":"Fall","TermYear":"2019-fa","Course":"AAS 200","Course Title":"U.S. Race and Empire","ACP":"","CS":"US","HUM":"HP","NAT":"","QR":"","SBS":""},
const Course = (props) => (
  <tr>
    <td>hello</td>
    <td>{props.course.Year}</td>
    <td>{props.course.Course}</td>
    <td>{props.course.Course}</td>
    <td>{props.course.Course}</td>
    {/* <td>{props.course.level}</td> */}
    {/* <td>
      {/* <Link className='btn btn-link' to={`/edit/${props.record._id}`}>
        Edit
      </Link>{' '}
      | */}
    {/* <button
        className='btn btn-link'
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      > */}
    {/* Delete
      </button> */}
    {/* </td> */} */}
  </tr>
);

export default function CourseList() {
  const [courses, setCourses] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getCourses() {
      //get from databse
      const response = await fetch(`http://localhost:5000/courses/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const courses = await response.json();
      setCourses(courses);
    }

    getCourses();

    return;
  }, [courses.length]);

  // This method will delete a record
  // async function deleteRecord(id) {
  //   await fetch(`http://localhost:5000/${id}`, {
  //     method: 'DELETE',
  //   });

  //   const newRecords = records.filter((el) => el._id !== id);
  //   setRecords(newRecords);
  // }

  // This method will map out the records on the table
  function courseList() {
    return courses.map((course) => {
      return (
        <Course
          course={course}
          // deleteRecord={() => deleteRecord(record._id)}
          key={course._id}
        />
      );
    });
  }

  // This following section will display the table with the records of courses.
  return (
    <div>
      <h3>course List</h3>
      <table className='table table-striped' style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{courseList()}</tbody>
      </table>
    </div>
  );
}
