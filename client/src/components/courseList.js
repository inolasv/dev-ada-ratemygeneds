import React, { useEffect, useState } from 'react';

const Course = (props) => (
  <tr>
    <td>{props.course.Course}</td>
    <td>{props.course['Course Title']}</td>
  </tr>
);

export default function CourseList() {
  const [courses, setCourses] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getCourses() {
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

  // This method will map out the records on the table
  function courseList() {
    return courses.map((course) => {
      return <Course course={course} key={course._id} />;
    });
  }

  // This following section will display the table with the records of courses.
  return (
    <div>
      <table className='table table-striped' style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Numbers</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{courseList()}</tbody>
      </table>
    </div>
  );
}
