
import "./Explore.css";

const Explore = ({children}) => {
  return (
    <div className="explorebox" >
      <div className="componentBox" >
        {children}
      </div>

    </div>
  )
}

export default Explore