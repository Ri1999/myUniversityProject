import "./Explore.css";
import { ImInfo } from "react-icons/im";

const TeacherCard = ({ teacher }) => {

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

        <h3>
          Contact: {teacher.phonenumber}
        </h3>

        <button
          className="icon-button"
          type="button"
        >
          <ImInfo color="gold" />
        </button>

      </div>

    </div>
  )
}

export default TeacherCard