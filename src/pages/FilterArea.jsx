
import { GiVanillaFlower } from "react-icons/gi";
import "./Explore.css";
const FilterArea = 


({selectedExperience,
  setSelectedExperience,

  selectedEmployment,
  setSelectedEmployment,

resetFilters}) => {

    // test after all thing completed down there
    console.log(selectedExperience)
    console.log(selectedEmployment)

    // caught errors - my fault actually i am not add values inside <option> so its like value="" , so i must dix that




  return (
    <div className='filterArea' >

      {/* desktop */}
      <h3 className='desktop-text' style={{textAlign:"center"}}>Taste the Nectar <GiVanillaFlower size={30} style={{color:"gold"}} /></h3>

      {/* mobile */}
      <h3 className="mobile-text">Scroll to Taste the Nectar <GiVanillaFlower size={30} style={{color:"gold", marginLeft: "10px"}} /></h3>
      <div className="filterparent">
        <div className="filtering">
        {/* subject */}

        {/* <label>Subject</label>
        <select>
          <option value="">English</option>
          <option value="">Bengali</option>
          <option value="">Physics</option>
          <option value="">Chemistry</option>
          <option value="">Biology</option>
          <option value="">Mathematics</option>
          <option value="">Sanskrit</option>
        </select> */}

        {/* City */}

        {/* <label htmlFor="">Garden</label>
        <input type="text" placeholder='Enter City Name' /> */}



        {/* expertise */}

        {/*  after receiving props add parameters here */}
        <label htmlFor="">Flight Hours</label>
        <select
        value={selectedExperience}
        onChange={function(e){
          setSelectedExperience(e.target.value)
        }}
        
        >
          {/* add this default optaion after prop */}
          <option value="">All Experience</option> 


          <option value="0-2" >0-2 Years</option>
          <option value="3-5" >3-5 Years</option>
          <option value="5+" >5+ Years</option>
          <option value="10+" >10+ Years</option>
        </select>

        {/* type of tutor */}

        {/* same goes here too add params */}
        <label htmlFor="">Colony Role</label>
        <select
        value={selectedEmployment}
        onChange={function(e){
          setSelectedEmployment(e.target.value)
        }}
        
        >
          {/* add this default optaion after prop */}
          <option value="">All Roles</option> 

          <option value="private tutor">Private Tutor</option>
<option value="govt. school teacher">Govt School Teacher</option>
<option value="private school teacher">Private School Teacher</option>
<option value="trainer">Trainer</option>
        </select>
      </div>
      <div className="filterBtn flexy">

        {/*  as select are real time applied so no need to apply button now
         */}
        {/* <button>Apply</button> */}

        {/*  for reset we go explore again, do it when all guchaa it complited */}
        <button onClick={resetFilters} >Reset</button>
      </div>


      </div>
      
    </div>
  )
}

export default FilterArea