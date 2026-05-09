import React from 'react'
import { PiStudentBold } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
const Benifit = () => {
  return (
    <div>
        <div className="benifit flexy">
            <div className="benifit-student flexy">
                <h3>For Students<PiStudentBold size={60} /></h3>
                <h4>Find the right teacher near you, completely free</h4>
                <p>Filter teachers by subject, location</p>
                <p>Learn from verified and trusted teachers nearby</p>
                <p>Choose teachers that match your learning needs</p>
            </div>
            <div className="benifit-teacher flexy">
                <h3>For Teachers <FaChalkboardTeacher size={60}  /></h3>
                <h4>Grow your teaching presence and reach more students</h4>
                <p>List your profile for free in minutes</p>
                <p>Showcase your skills and expertise to students</p>
                <p>Get discovered by students in your city</p>
            </div>
        </div>
    </div>
  )
}

export default Benifit