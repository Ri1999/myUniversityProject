
import "./Explore.css";

import SearchBar from "./SearchBar";
import FilterArea from "./FilterArea";
import ListArea from "./ListArea";
import ExploreFooter from "./ExploreFooter";
import { useState, useEffect } from "react";


const Explore = () => {

  // this must becomes brain from just warpper, all states must be here

  // and all compnents must be import here
  // for using children props passing is difficult so , remove childiren and invoke compnents down there.

  // and explore inside app.jsx be simple, not wrap.

  // serach state is becomes props and send via <SearchBar />
  
  // then also after <SearchBar/> same searchText props send via ListArea - read down below

  // after completing 1 and 2 , filter states alos need to created right?- yes , and after creating send is must to <filterArea /> as props

  // after sending <filterArea/> props only default states props send again inside <ListArea />

  

  const [searchText, setSearchText] = useState("");

  // filter states

  const [selectedExperience, setSelectedExperience] = useState("");

  const [selectedEmployment, setSelectedEmployment] = useState("");

  // filter reset method , and we know we apss it inside <filterArea/>

  const [loading, setLoading] = useState(true);

  // real integrations

  const [teachers, setTeachers] = useState([]);

  // fethc data

  useEffect(() => {

  async function fetchTeachers() {

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/teachers",
        {

          headers: {
            Authorization: `Bearer ${token}`
          }

        }
      );

      const data = await response.json();

      console.log(data);

      setTeachers(data.teachers);

    } catch (error) {

      console.log(error);

    }finally {
      setLoading(false); // 
    }
  }

  fetchTeachers();

}, []);



  const resetFilters = () => {

  setSelectedExperience("");
  setSelectedEmployment("");
  setSearchText("");

  }




  return (
    <div className="explorebox" >
      <div className="componentBox" >

        {/* here all props will be sending  */}

        <SearchBar

        // send it-> 1 (go there instruction written)
        searchText={searchText}
        setSearchText={setSearchText}

        // go search component and invoke them there 
        
        />

        <FilterArea 

        // send it again those inside filter props ->3 , fulther instruction written on that component

        selectedExperience = {selectedExperience}
        setSelectedExperience = {setSelectedExperience}

        selectedEmployment = {selectedEmployment}
        setSelectedEmployment = {setSelectedEmployment}

        // do it when 1,2,3 & 4 steps are fully completed -> 5 further instruction on the component side
        resetFilters={resetFilters} 

        
        />

        <ListArea 

        // do it -> 2 (go there instruction written )
        searchText={searchText}

        // do it (when completed all written instruction from up and 1 & 2 and 3 completed and sufessfulled) -> 4 ... further instruction wrtiien there

        // sending default states
        selectedExperience = {selectedExperience}

        selectedEmployment = {selectedEmployment}

        // real data

        teachers={teachers}
        loading={loading}

        
        />
        <ExploreFooter />

      </div>

    </div>
  )
}

export default Explore