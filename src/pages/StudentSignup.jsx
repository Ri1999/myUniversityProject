import "./SignUp.css"

const StudentSignup = () => {
  return (
    <div className="studentOuterBox">
      <div className="studentinnerBox flexy">
        <h2>Student Registration Form</h2>
        <form className="studentform">
          
          <label htmlFor="name">Student Name:</label>
          <input required type="text" id="name" placeholder="Full Name" autoFocus/>

          <label htmlFor="qualification">Highest Qualification:</label>
          <input required type="text" id="qualification" placeholder="e.g. M.Sc Mathematics" />

           <label htmlFor="subjects">Subjects:</label>
          <input required type="text" id="subjects" placeholder="Math, Science, etc." />

          <label htmlFor="email">Email:</label>
          <input required type="email" id="email" placeholder="email@example.com" />

          <label htmlFor="pass">Password:</label>
          <input required type="password" id="pass" placeholder="********" />

          <label htmlFor="dob">Date of Birth:</label>
          <input required type="date" id="dob" />

          <label htmlFor="mobile">Mobile Number:</label>
          <input required type="tel" id="mobile" placeholder="+91..." />

          <label htmlFor="gender">Gender:</label>
          <select required id="gender">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="city">City:</label>
          <input required type="text" id="city" placeholder="e.g. Bhadreswar" />

          <label htmlFor="pincode">Pincode:</label>
          <input required type="text" id="pincode" placeholder="e.g. 712124" />

          <button type="submit" className="submitBtn">Submit</button>
        </form>
        <h3>*Press Enter or Click to submit your form*</h3>
      </div>
    </div>
  )
}

export default StudentSignup