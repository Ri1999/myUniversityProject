import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const StudentSignup = () => {

  const navigate = useNavigate();

  const [studentdata, setStudentdata] = useState({
    fullname: "",
    hqualification: "",
    subjects: "",
    email: "",
    password: "",
    conformpassword: "",
    dob: "",
    phonenumber: "",
    gender: "",
    city: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    password: "",
    conformpassword: "",
    phonenumber: "",
  });

  const handleInputChange = (e) => {
    setStudentdata({
      ...studentdata,
      [e.target.name]: e.target.value,
    });
  };

  const validateFields = () => {

    let newErrors = {};

    if (!studentdata.fullname.trim()) {
      newErrors.fullname = "Name required";
    }

    if (!studentdata.email.trim()) {
      newErrors.email = "Email required";
    }

    if (!studentdata.password.trim()) {
      newErrors.password = "Password required";
    }

    if (studentdata.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    if (
      studentdata.password.trim() !==
      studentdata.conformpassword.trim()
    ) {
      newErrors.conformpassword =
        "Passwords do not match";
    }

    if (
      !/^[0-9]{10}$/.test(studentdata.phonenumber)
    ) {
      newErrors.phonenumber =
        "Phone must be 10 digits";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const isValid = validateFields();

    if (!isValid) {
      return;
    }

    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/signup",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: studentdata.fullname,

            qualification:
              studentdata.hqualification,

            subjects: studentdata.subjects
              .split(",")
              .map((item) => item.trim()),

            email: studentdata.email,

            password: studentdata.password,

            dob: studentdata.dob,

            mobNumber:
              Number(studentdata.phonenumber),

            gender:
              studentdata.gender.charAt(0).toUpperCase() +
              studentdata.gender.slice(1),

            city: studentdata.city,

            pincode:
              Number(studentdata.pincode),

            userType: "Student",
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      // ERROR HANDLING
      if (!response.ok) {

        alert(
          data.message || "Signup failed"
        );

        return;
      }

      // STORE TOKEN
      localStorage.setItem(
        "token",
        data.token
      );

      // STORE USER TYPE
      localStorage.setItem(
        "userType",
        data.user.userType
      );

      // STORE USER DATA
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      // NAVIGATE
      navigate("/explore-teacher-list");

    } catch (error) {

      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <div className="studentOuterBox">

      <div className="studentinnerBox flexy">

        <h2>Student Registration Form</h2>

        <form
          onSubmit={handleSubmit}
          className="studentform"
        >

          <label htmlFor="name">
            Student Name:
          </label>

          <input
            onChange={handleInputChange}
            name="fullname"
            value={studentdata.fullname}
            required
            type="text"
            id="name"
            placeholder="Full Name"
            autoFocus
          />

          {errors.fullname && (
            <p>{errors.fullname}</p>
          )}

          <label htmlFor="qualification">
            Highest Qualification:
          </label>

          <input
            onChange={handleInputChange}
            name="hqualification"
            value={studentdata.hqualification}
            required
            type="text"
            id="qualification"
            placeholder="e.g. M.Sc Mathematics"
          />

          <label htmlFor="subjects">
            Subjects:
          </label>

          <input
            onChange={handleInputChange}
            name="subjects"
            value={studentdata.subjects}
            required
            type="text"
            id="subjects"
            placeholder="Math, Science, etc."
          />

          <label htmlFor="email">
            Email:
          </label>

          <input
            onChange={handleInputChange}
            name="email"
            value={studentdata.email}
            required
            type="email"
            id="email"
            placeholder="email@example.com"
          />

          {errors.email && (
            <p>{errors.email}</p>
          )}

          <label htmlFor="pass">
            Password:
          </label>

          <input
            onChange={handleInputChange}
            name="password"
            value={studentdata.password}
            required
            type="password"
            id="pass"
            placeholder="********"
          />

          {errors.password && (
            <p>{errors.password}</p>
          )}

          <label htmlFor="conformpass">
            Confirm Password:
          </label>

          <input
            onChange={handleInputChange}
            name="conformpassword"
            value={studentdata.conformpassword}
            required
            type="password"
            id="conformpass"
            placeholder="********"
          />

          {errors.conformpassword && (
            <p>{errors.conformpassword}</p>
          )}

          <label htmlFor="dob">
            Date of Birth:
          </label>

          <input
            onChange={handleInputChange}
            name="dob"
            value={studentdata.dob}
            required
            type="date"
            id="dob"
          />

          <label htmlFor="mobile">
            Mobile Number:
          </label>

          <input
            onChange={handleInputChange}
            name="phonenumber"
            value={studentdata.phonenumber}
            required
            type="tel"
            id="mobile"
            placeholder="+91..."
          />

          {errors.phonenumber && (
            <p>{errors.phonenumber}</p>
          )}

          <label htmlFor="gender">
            Gender:
          </label>

          <select
            onChange={handleInputChange}
            name="gender"
            value={studentdata.gender}
            required
            id="gender"
          >
            <option value="">
              Select Gender
            </option>

            <option value="male">
              Male
            </option>

            <option value="female">
              Female
            </option>

            <option value="others">
              Others
            </option>

          </select>

          <label htmlFor="city">
            City:
          </label>

          <input
            onChange={handleInputChange}
            name="city"
            value={studentdata.city}
            required
            type="text"
            id="city"
            placeholder="e.g. Kolkata"
          />

          <label htmlFor="pincode">
            Pincode:
          </label>

          <input
            onChange={handleInputChange}
            name="pincode"
            value={studentdata.pincode}
            required
            type="text"
            id="pincode"
            placeholder="e.g. 700001"
          />

          <button
            type="submit"
            className="submitBtn"
          >
            Submit
          </button>

        </form>

        <h3>
          *Press Enter or Click to submit your form*
        </h3>

      </div>
    </div>
  );
};

export default StudentSignup;
