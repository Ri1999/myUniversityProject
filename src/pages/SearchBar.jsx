import { useState } from "react";
import { GiArtificialHive } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import "./Explore.css";
import UpdateDetails from "./UpdateDetails";
import { GrUserAdmin } from "react-icons/gr";
import { MdLogin } from "react-icons/md";

const SearchBar = ({searchText, setSearchText}) => {

  // update state

  const [updateModal, setUpdateModal] = useState(false)


  return (
    <div className='searchArea' >
      <div className='upperSearchArea flexy'>

      <h2><GiArtificialHive size={30} /> Find the Right Teacher for Your Learning Journey <button onClick={function(){
        setUpdateModal(true)
      }} type="button">AdminPanel <GrUserAdmin  size={20} /></button> <button type="button">LogOut <MdLogin size={20} /></button> </h2>
      
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