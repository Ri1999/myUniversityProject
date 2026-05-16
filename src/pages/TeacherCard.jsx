import "./Explore.css";
import { ImInfo } from "react-icons/im";
import { useState } from "react";
import FullDetailsCard from "./FullDetailsCard";

const TeacherCard = ({ teacher }) => {

  // for full details modal

    const [fulldetails, setFulldetails] = useState(false);

  return (

    <div className="cardContainer">

      <h2>{teacher.fullname}</h2>
      <h3>{teacher.hqualification}</h3>
      <h3>
        Experts in: {teacher.expertise}
      </h3>
      <h3>
        Experience: {teacher.experience} years
      </h3>
      <h3>
        City: {teacher.city}
      </h3>
      
      <div className="contactRow">

        {/* <h3>
          Contact: {teacher.phonenumber}
        </h3> */}

        <button

          onClick={function(){
            setFulldetails(true)
          }}

          className="icon-button"
          type="button"
        >
          <ImInfo color="gold" />Full details...
        </button>

      </div>

      {/* show details modal */}

      {fulldetails && <FullDetailsCard  closeDetails={function(){setFulldetails(false)}}  DetailsData={teacher} /> }

      {/* show update info modal for users(teacher+student) */}
      



    </div>
  )
}

export default TeacherCard