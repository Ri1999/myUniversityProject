import "./Details.css"
import { FaPaperclip } from "react-icons/fa6";

const FullDetailsCard = ({closeDetails, DetailsData}) => {
  return (
    <div className="DetailsmodalOverlay">

    <div className="DetailsmodalContent">
        <button onClick={closeDetails} type="button">X</button>
        <div className="detailsContent">

            <h2>{DetailsData.fullname}</h2>
            <h4>({DetailsData.bio})</h4>
            <p><b>Experience:</b> {DetailsData.experience} years | <b>Employment:</b>  {DetailsData.employment}</p>
            <p>Experts in {DetailsData.expertise}</p>
            <p><b>Email:</b> {DetailsData.email}</p>
            <p><b>Phonenumber:</b> {DetailsData.phonenumber}</p>
            <p><b>Gender:</b> {DetailsData.gender}</p>
            <p><b>City:</b> {DetailsData.city}</p>
            <p><b>Pincode:</b> {DetailsData.pincode}</p>

        </div>

    </div>
    
    
    </div>
  )
}

export default FullDetailsCard