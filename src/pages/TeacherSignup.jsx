import "./SignUp.css"
import { useState } from "react"
const TeacherSignup = () => {

  const [teacherData, setTeacherData] = useState({

    fullname: "",
    hqualification: "",
    experience: "",
    expertise: "",
    employment:"private",
    phonenumber:"",
    city: "",
    pincode:"",
    bio:"",


  email: "",
  password: "",
  dob: "",
  gender: ""


  })


  const handleInputChange =(e)=> {

    setTeacherData({
      ...teacherData,
      [e.target.name]:e.target.value
    })

  }

  const validateFields = () => {

  const {
    fullname,
    email,
    password,
    phonenumber

  } = teacherData;  // taken as destructure from state actual filed to validate only

  // empty string check
  if (!fullname.trim()) return "Name required";
  if (!email.trim()) return "Email required";
  if (!password.trim() && password.length < 6) return "Password required";

  if (!/^[0-9]{10}$/.test(phonenumber)) {
  return "Phone must be 10 digits";
}


  return null;

};
  
  const handleSumbit = (e)=>{
    e.preventDefault();

    // invoke method
    const myError = validateFields();
    // handle error message
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
    <div className="teacherOuterBox" >
      <div className="teacherInnerBox">
        <h2>Teacher Registration Form</h2>
        <form onSubmit={handleSumbit} className="teacherform">
          
          <label htmlFor="name">Teacher Name:</label>

          <input onChange={handleInputChange} name="fullname" value={teacherData.fullname} required type="text" id="name" placeholder="Prof. / Mr. / Ms." autoFocus />

          <label htmlFor="qualification">Highest Qualification:</label>
          <input onChange={handleInputChange} name="hqualification" value={teacherData.hqualification} required type="text" id="qualification" placeholder="e.g. M.Sc Mathematics" />

          <label htmlFor="exp">Teaching Experience (Years):</label>
          <input onChange={handleInputChange} name="experience" value={teacherData.experience} required type="number" id="exp" placeholder="e.g. 5" />

          <label htmlFor="status">Current Employment:</label>
          <select onChange={handleInputChange} name="employment" value={teacherData.employment} required id="status">
            <option value="private">Private Tutor</option>
            <option value="govt">Govt. School Teacher</option>
            <option value="freelance">Pvt. School Teacher</option>
            <option value="corporate"> Trainer</option>
          </select>

          <label htmlFor="subjects">Areas of Expertise:</label>
          <input onChange={handleInputChange} name="expertise" value={teacherData.expertise} required type="text" id="subjects" placeholder="Math, Science, etc." />

          <label htmlFor="email">Email:</label>
          <input onChange={handleInputChange} name="email" value={teacherData.email}  required type="email" id="email" placeholder="email@example.com" />

          <label htmlFor="pass">Password:</label>
          <input onChange={handleInputChange} name="password" value={teacherData.password} required type="password" id="pass" placeholder="********" />

          <label htmlFor="dob">Date of Birth:</label>
          <input onChange={handleInputChange} name="dob" value={teacherData.dob} required type="date" id="dob" />

          <label htmlFor="mobile">Mobile Number:</label>
          <input onChange={handleInputChange} name="phonenumber" value={teacherData.phonenumber} required type="tel" id="mobile" placeholder="+91..." />

          <label htmlFor="gender">Gender:</label>
          <select onChange={handleInputChange} name="gender" value={teacherData.gender} required id="gender">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="city">City:</label>
          <input onChange={handleInputChange} name="city" value={teacherData.city} required type="text" id="city" placeholder="e.g. Bhadreswar" />

          <label htmlFor="pincode">Pincode:</label>
          <input onChange={handleInputChange} name="pincode" value={teacherData.pincode} required type="text" id="pincode" placeholder="e.g. 712124" />


          <label htmlFor="bio">Teaching Bio:</label>
          <textarea onChange={handleInputChange} name="bio" value={teacherData.bio} required
            id="bio" 
            placeholder="Tell students about your teaching style..." 
            rows="3" 
            style={{width: '100%', borderRadius: '6px', padding: '8px', border: '1px solid black'}}
          />

          <button type="submit" className="submitBtn">Submit</button>
        </form>
        <h3>*Press Enter or Click to submit your form*</h3>
      </div>

    </div>
  )
}

export default TeacherSignup