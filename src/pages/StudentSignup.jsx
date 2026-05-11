import { useState } from "react"
import "./SignUp.css"

const StudentSignup = () => {

  const [studentdata, setStudentdata] = useState({

    fullname:"",
    hqualification:"",
    subjects:"",
    email:"",
    password:"",
    conformpassword:"",
    dob:"",
    phonenumber:"",
    gender:"",
    city: "",
    pincode:"",

  });

  const handleInputChange =(e)=> {

    setStudentdata({
      ...studentdata,
      [e.target.name]: e.target.value
    })
  }
  const validateFields = () => {

  const {
    fullname,
    email,
    password,
    conformpassword,
    phonenumber

  } = studentdata;  // taken as destructure from state actual filed to validate only

  // empty string check
  if (!fullname.trim()) return "Name required";
  if (!email.trim()) return "Email required";
  if (!password.trim() ) return "Password required";
  if(password.length < 6) return "Password must be at least 6 characters";
  if(password.trim()!==conformpassword.trim()){
    return "Password didnot matched !";
  }

  if (!/^[0-9]{10}$/.test(phonenumber)) {
  return "Phone must be 10 digits";
}


  return null;

};

const handleSubmit=(e)=>{
  e.preventDefault();

  const myError = validateFields();
  if(myError){
    alert(myError);
    return
  }

  async function APIcall() {

      try{
        // fetch and await apis code in next

      }catch(error){
        console.log(error);
        alert("Something went wrong");
      }
      
    }
    APIcall()


}



  return (
    <div className="studentOuterBox">
      <div className="studentinnerBox flexy">
        <h2>Student Registration Form</h2>
        <form onSubmit={handleSubmit} className="studentform">
          
          <label htmlFor="name">Student Name:</label>
          <input onChange={handleInputChange} name="fullname" value={studentdata.fullname} required type="text" id="name" placeholder="Full Name" autoFocus/>

          <label htmlFor="qualification">Highest Qualification:</label>
          <input onChange={handleInputChange}  name="hqualification" value={studentdata.hqualification} required type="text" id="qualification" placeholder="e.g. M.Sc Mathematics" />

           <label htmlFor="subjects">Subjects:</label>
          <input onChange={handleInputChange}  name="subjects" value={studentdata.subjects} required type="text" id="subjects" placeholder="Math, Science, etc." />

          <label htmlFor="email">Email:</label>
          <input onChange={handleInputChange}  name="email" value={studentdata.email} required type="email" id="email" placeholder="email@example.com" />

          <label htmlFor="pass">Password:</label>
          <input onChange={handleInputChange}  name="password" value={studentdata.password} required type="password" id="pass" placeholder="********" />

          <label htmlFor="pass">Conform Password:</label>
          <input onChange={handleInputChange}  name="conformpassword" value={studentdata.conformpassword} required type="password" id="conformpass" placeholder="********" />

          <label htmlFor="dob">Date of Birth:</label>
          <input onChange={handleInputChange}  name="dob" value={studentdata.dob} required type="date" id="dob" />

          <label htmlFor="mobile">Mobile Number:</label>
          <input onChange={handleInputChange}  name="phonenumber" value={studentdata.phonenumber} required type="tel" id="mobile" placeholder="+91..." />

          <label htmlFor="gender">Gender:</label>
          <select onChange={handleInputChange}  name="gender" value={studentdata.gender} required id="gender">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="city">City:</label>
          <input onChange={handleInputChange}  name="city" value={studentdata.city} required type="text" id="city" placeholder="e.g. Bhadreswar" />

          <label htmlFor="pincode">Pincode:</label>
          <input onChange={handleInputChange}  name="pincode" value={studentdata.pincode} required type="text" id="pincode" placeholder="e.g. 712124" />

          <button type="submit" className="submitBtn">Submit</button>
        </form>
        <h3>*Press Enter or Click to submit your form*</h3>
      </div>
    </div>
  )
}

export default StudentSignup