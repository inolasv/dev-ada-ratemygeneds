
import React, { Component } from "react";
import { useParams} from "react-router-dom";
const SingleGenEd = () => {
    const params = useParams();
    const courseid = params.courseId //adn then look up and fetch data from there
    const name = params.courseName
        return (
            <div>
            <image src="https://i.pinimg.com/236x/b8/9e/28/b89e287af55113b8f25349a1c94815c1.jpg" alt="Click to return to home screen"/> 
            <h1>{courseid} ClassName</h1>
            <h1>Name of class: {name} </h1>
            <h3> Course Description: pulls from the data</h3>
            <h3> Average Rating</h3> 
            <image src="https://icon2.cleanpng.com/20171220/ofw/star-png-image-5a3a7e9651e390.02167008151378293433541614.jpg" alt="display image"/> 
            <h3> Number of Ratings: </h3>
            <h3> Categories: import the gen-ed categories</h3> 
            </div>
            );
}
export default SingleGenEd;