import '../stylesheets/Search.css';
import React, { Component, useState } from 'react';
import Course from './courseList';
import star from '../star.png'
import { Link } from 'react-router-dom';

export default function Search() {

  const [courses, setCourses] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  const quotes = [
    'This class was super straightforward, I really loved learning about the topic and was able to dive deeper with our group projects. Definitely would suggest taking!',
    "I hated this class so much. There was so much work every week, and the professor always graded super harshly, and wouldn't give much feedback to students. If you can, I'd suggest taking another gened.",
    "This class was moderate in workload, but it doesn't have a final exam or midterms, just weekly quizzes that are super easy to do, and discussions are always fun to go to, I'm always wide awake during this class!",
  ];


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
  
  const determineClass = (type) => {
    if (type === "") {
      return "none"
    }
    return "box"
  }

  const makeStars = () => {
    const stars = [];
    for(var i = 0; i < Math.random() * 5; i++) {
      stars.push(<img src={star} alt="Star" className="star"/>);
    }
    return stars;
  }


  return (
    <div className="search-wrapper">
      <p className="sign-in">Sign in</p>
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
            {course.Course} : {course['Course Title']}
            <Link to={`/details/${course._id}`} key={course._id}> {course.Course} </Link>
            <p className={determineClass(course['ACP'])}>{ course['ACP'] }</p> 
            <p className={determineClass(course['CS'])}>{ course['CS'] }</p> 
            <p className={determineClass(course['HUM'])}>{ course['HUM'] }</p> 
            <p className={determineClass(course['NAT'])}>{ course['NAT'] }</p> 
            <p className={determineClass(course['QR'])}>{course['QR']}</p> 
            <p className={determineClass(course['SBS'])}>{course['SBS']}</p>
            {makeStars()}

          </div>
          <div className="review">
          {quotes[Math.floor(Math.random() * 3) + 0]}
          </div>
        </div>
      ))}
    </div>
  );
}
