
import { GiVanillaFlower } from "react-icons/gi";
import "./Explore.css";
const FilterArea = () => {
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
        <label htmlFor="">Flight Hours</label>
        <select>
          <option value="">0-2 Years</option>
          <option value="">3-5 Years</option>
          <option value="">5+ Years</option>
          <option value="">10+ Years</option>
        </select>

        {/* type of tutor */}
        <label htmlFor="">Colony Role</label>
        <select>
          <option value="">Solitary Bee / Private Tutor</option>
          <option value="">State Protector/ Govt. School Teacher</option>
          <option value="">Hive Guardian / Pvt. School Teacher</option>
          <option value="">Waggle Dancer / Trainer</option>
        </select>
      </div>
      <div className="filterBtn flexy">
        <button>Apply</button>
        <button>Reset</button>
      </div>


      </div>
      
    </div>
  )
}

export default FilterArea