
import React, { Component, useState , useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CourseList from "./courseList";
import "./Home";

const SingleGenEd = () => {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        // const params = useParams();
        // const courseid = params.courseId
        async function getCourse() {
          const response = await fetch(`http://localhost:5000/courses/id/` + courseid);
    
          if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
          }
    
          const course = await response.json();
          console.log(course[0]);
          setCourse(course[0]);
        }
    
        getCourse();
    
        return;
      }, []);
      const params = useParams();
      const courseid = params.courseId
     //adn then look up and fetch data from there
        return (
            <div className="course-id">
              <image src="https://i.pinimg.com/236x/b8/9e/28/b89e287af55113b8f25349a1c94815c1.jpg" alt="Click to return to home screen"/> 
              <div className="course-title">
                <h1>{course['Course']} {course['Course Title']}</h1>
              </div>
              <div className="course-description">
                <h3> Course Description:</h3>
              </div>
              <div className="ratings">
                <h3> Average Rating</h3> 
                <image src="https://icon2.cleanpng.com/20171220/ofw/star-png-image-5a3a7e9651e390.02167008151378293433541614.jpg" alt="display image"/> 
                <h3> Number of Ratings: </h3>
              </div>
              <div className="categories">
                <h3> Categories: {course['ACP']} {course['CS']} {course['HUM']} {course['NAT']} {course['QR']} {course['SBS']}</h3> 
              </div>
            </div>
            );
}

export default SingleGenEd;

// pushing
// git add .    
// git commit -m "first page routed, added login"
// git branch "routed" 
// git checkout "routed"
// git push origin routed