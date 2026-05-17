import "./Explore.css";
import { MdOutlineMailOutline } from "react-icons/md";
const ExploreFooter = () => {
  return (
    <div className="exploreFooter">
      <div className="footerContainer">
        <h2>Project Bee</h2>

        <p>
          This is a completely free open directory designed to help students 
          discover and connect with local teachers seamlessly, without any ads or hidden charges.
        </p>

        <p>
          <strong>Disclaimer:</strong> This platform acts solely as a discovery directory. 
          Any financial discussions, fee structures, or tutoring arrangements between teachers 
          and students are strictly personal. We do not manage, monitor, or take responsibility 
          for any private agreements.
        </p>

        <p>
          This directory was built as a university learning project while exploring React 
          and frontend development for the first time. If you encounter any bugs 
          or issues, an advanced apology from the developer 🙏
        </p>

        <p>
          User feedback and feature suggestions to improve this directory will always receive 100% priority.
        </p>

        <div className="reviewSection">
          <h3><MdOutlineMailOutline size={15}/> Send Feedback / Report a Listing</h3>
          <a href="mailto:patraarittik1999@gmail.com"><i>patraarittik1999@gmail.com</i>
          </a>
        </div>

        <p className="footerBottom">
          Built with curiosity, late-night debugging, and a lot of coffee ☕
        </p>
      </div>
    </div>
  );
};

export default ExploreFooter;