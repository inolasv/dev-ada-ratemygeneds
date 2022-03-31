import '../stylesheets/Search.css';
import React, { Component, useState } from 'react';
import Course from './courseList';
export default function Search() {
  const [courses, setCourses] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  const handleOnChange = (event) => {
    setSearchValue(event.target.value);
  };

  const courseList = () => {
    return courses.map((course) => {
      return <Course course={course} key={course._id} />;
    });
  };

  const handleSearch = () => {
    console.log('this is what you typed: ', searchValue);
    getFilteredCourses(searchValue);
  };

  const getFilteredCourses = (searchInput) => {
    async function getCourses() {
      //this is bad right now copied from another file
      const response = await fetch(
        `http://localhost:5000/courses/${searchInput}`
      );

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const courses = await response.json();
      console.log(courses);
      setCourses(courses);
    }

    getCourses();
  };

  return (
    <div className="search-wrapper">
      <h1 className="title">Rate My Gen-Eds @ UIUC</h1>
      {/* <p>This is what you typed: {searchValue}</p> */}
      <input
        name='text'
        type='text'
        placeholder='search for a course or requirement'
        onChange={(event) => handleOnChange(event)}
        value={searchValue}
      />
      <div>
      <button onClick={handleSearch}>Search</button>
      </div>
      {courses.map((course, index) => (
        <div key={index}>
          <div className="search-result-wrapper">
            {course.Course} : {course['Course Title']} <p>{ course['ACP'] }</p> <p>{ course['CS'] }</p> <p>{ course['HUM'] }</p> <p>{ course['NAT'] }</p> <p>{ course['QR'] }</p> <p>{ course['SBS'] }</p>
          </div>
        </div>
      ))}
    </div>
  );
}
