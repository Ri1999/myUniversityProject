
import { GiHoneycomb } from "react-icons/gi";
import { MdOutlineHive } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Header = ({children}) => {

  // const student_page = useNavigate();
  // const teacher_page = useNavigate();

  const navigate_page = useNavigate();


  return (
    <div>
      
      <header>
        {children}
        <div className="flexy headerbanner">
          <h1>Find Trusted Teachers Near You</h1>
          <p style={{textAlign:"justify"}} >Discover expert teachers near you. Learn beyond the screen with Project <b>Bee</b>.</p>
        </div>
        <div className="submit-area flexy">
          <div className="hive-icon">
            <GiHoneycomb size={200}/>
            <MdOutlineHive size={80} />
          </div>
          <form className='form-content flexy' >
            <a onClick={function(e){
              e.preventDefault()
              navigate_page("/student-sign-up")
            }} 
            
            href="">Sign up as Student</a>

            
            <a onClick={function(e){
              e.preventDefault();
              navigate_page("/teacher-sign-up")
            }} href="">Sign up as Teacher</a>
            <h3>Join Bee Community !</h3>
          </form>
        </div>

        
      </header>
    </div>
  )
}

export default Header