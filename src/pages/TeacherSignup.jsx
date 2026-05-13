import "./SignUp.css"
import { useState } from "react"
const TeacherSignup = () => {

  const [teacherData, setTeacherData] = useState({

    fullname: "",
    hqualification: "",
    experience: "",
    employment:"private",
    expertise: "",
    email: "",
    password: "",
    conformpassword:"",
    dob: "",
    phonenumber:"",
    gender: "",
    city: "",
    pincode:"",
    bio:"",
  })


  const handleInputChange =(e)=> {

    setTeacherData({
      ...teacherData,
      [e.target.name]:e.target.value
    })

  }
  const [errors, setErrors] = useState({

    fullname: "",
    email: "",
    password: "",
    conformpassword: "",
    phonenumber: "",

  })

  const validateFields = () => {

    const newError ={};
    if(!teacherData.fullname.trim()){
      newError.fullname="Name required"
    }
    if(!teacherData.email.trim()){
      newError.email="Email required"
    }
    if(!teacherData.password.trim()){
      newError.password="Password required"
    }
    if(teacherData.password.length <6){
      newError.password="Password must be at least 6 characters"
    }
    if(teacherData.password.trim()!==
  teacherData.conformpassword.trim()){
    newError.conformpassword="Passwords do not match"
  }
  if(!/^[0-9]{10}$/.test(teacherData.phonenumber)){
    newError.phonenumber = "Phone must be 10 digits";
  }


  setErrors(newError);

  return Object.keys(newError).length === 0;





};
  
  const handleSubmit = (e)=>{
    e.preventDefault();

    // invoke method
    const myError = validateFields();
    // handle error message
    if(!myError){
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
        <form onSubmit={handleSubmit} className="teacherform">
          
          <label htmlFor="name">Teacher Name:</label>

          <input onChange={handleInputChange} name="fullname" value={teacherData.fullname} required type="text" id="name" placeholder="Prof. / Mr. / Ms." autoFocus />
          {errors.fullname && <p>{errors.fullname}</p>}

          <label htmlFor="qualification">Highest Qualification:</label>
          <input onChange={handleInputChange} name="hqualification" value={teacherData.hqualification} required type="text" id="qualification" placeholder="e.g. M.Sc Mathematics" />

          <label htmlFor="exp">Teaching Experience (Years):</label>
          <input onChange={handleInputChange} name="experience" value={teacherData.experience} required type="number" id="exp" placeholder="e.g. 5" />

          <label htmlFor="status">Current Employment:</label>
          <select onChange={handleInputChange} name="employment" value={teacherData.employment} required id="status">
            <option value="private">Private Tutor</option>
            <option value="govt">Govt. School Teacher</option>
            <option value="freelance">Pvt. School Teacher</option>
            <option value="corporate">Trainer</option>
          </select>

          <label htmlFor="subjects">Areas of Expertise:</label>
          <input onChange={handleInputChange} name="expertise" value={teacherData.expertise} required type="text" id="subjects" placeholder="Math, Science, etc." />

          <label htmlFor="email">Email:</label>
          <input onChange={handleInputChange} name="email" value={teacherData.email}  required type="email" id="email" placeholder="email@example.com" />
          <p className="errorText">{errors.email}</p>

          <label htmlFor="pass">Password:</label>
          <input onChange={handleInputChange} name="password" value={teacherData.password} required type="password" id="pass" placeholder="********" />
          {errors.password && <p>{errors.password}</p>}

          <label htmlFor="pass">Conform Password:</label>
          <input onChange={handleInputChange} name="conformpassword" value={teacherData.conformpassword} required type="password" id="conformpass" placeholder="********" />
          {errors.conformpassword && <p>{errors.conformpassword}</p>}

          <label htmlFor="dob">Date of Birth:</label>
          <input onChange={handleInputChange} name="dob" value={teacherData.dob} required type="date" id="dob" />

          <label htmlFor="mobile">Mobile Number:</label>
          <input onChange={handleInputChange} name="phonenumber" value={teacherData.phonenumber} required type="tel" id="mobile" placeholder="+91..." />
          {errors.phonenumber && <p>{errors.phonenumber}</p>}

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