import { useState } from "react";
import { GiArtificialHive } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import "./Explore.css";
import UpdateDetails from "./UpdateDetails";
import { GrUserAdmin } from "react-icons/gr";
import { MdLogin } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SearchBar = ({searchText, setSearchText}) => {

  const navigate = useNavigate();

  const handleLogout = () => {

  localStorage.removeItem("token");

  navigate("/");

};

  // update state

  const [updateModal, setUpdateModal] = useState(false)


  return (
    <div className='searchArea' >
      <div className='upperSearchArea flexy'>

      <h2><GiArtificialHive size={30} /> Find the Right Teacher for Your Learning Journey <button onClick={function(){
        setUpdateModal(true)
      }} type="button">User Panel <GrUserAdmin  size={20} /></button> <button onClick={handleLogout} type="button">LogOut <MdLogin size={20} /></button> </h2>
      
      <p>Search by subject, expertise, or location to connect with trusted educators...</p>
      </div>
      <div className="lowerSearchArea flexy">
        <form className="searchForm">

          {/*  add paramenters now */}

          <input
          value={searchText}
          onChange={function(e){
            setSearchText(e.target.value)
          }}
          type="text"
          placeholder="type to Search by subject, city, or teacher name..."
          />
          {/* <button type="submit">
            <IoSearch size={22} />
          </button> */}
        </form>
      </div>

      {updateModal && <UpdateDetails updatemodalClose={function(){
        setUpdateModal(false)
      }} /> }

    </div>
  )
}

export default SearchBar