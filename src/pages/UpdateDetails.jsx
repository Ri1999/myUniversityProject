import { useState } from "react"
import "./Details.css"

const UpdateDetails = ({updatemodalClose}) => {

    // primary data
    const [updatedata, setUpdatedata] = useState({
        changeEmail:"",
        changePassword:"",
        retypePassword:"",
        changePhoneNumber:"",

    })

    // handle input
    const inputHandle = (e)=>{
        setUpdatedata({
            ...updatedata,
            [e.target.name]: e.target.value
        })
    }
    // show erroe state

    const [errorUpdate, setErrorUpdate] = useState({
        changeEmail:"",
        changePassword:"",
        retypePassword:"",
        changePhoneNumber:"",
    })

    // validate
    const validateData = () => {

    const updateError = {}

    if (
      updatedata.changeEmail &&
      !updatedata.changeEmail.includes("@")
    ) {
      updateError.changeEmail = "Invalid email";
    }

    if (
      updatedata.changePassword &&
      updatedata.changePassword.length < 6
    ) {
      updateError.changePassword =
        "Password must be at least 6 characters";
    }

    if (
      updatedata.changePassword &&
  updatedata.changePassword !== updatedata.retypePassword
    ) {
      updateError.retypePassword =
        "Passwords do not match";
    }

    if (
      updatedata.changePhoneNumber &&
      !/^[0-9]{10}$/.test(updatedata.changePhoneNumber)
    ) {
      updateError.changePhoneNumber =
        "Phone must be 10 digits";
    }

    setErrorUpdate(updateError);

    return Object.keys(updateError).length === 0;
}

   // submit habdle 
   const handleSubmit = (e)=>{

    e.preventDefault();

    // invoke validate method

    const myUpadteError = validateData();
    if(!myUpadteError){
        return
    }

    async function APIcall() {

      try{
        // fetch and await apis code in next

      }catch(error){
        console.log(error);
        alert("Something went wrong");
      }
      
    }
    APIcall()



   }



  return (
    <div className="updateModalOverlay" >

        <div className="updateModalContent">
            <div className="updateContent">
                <form onSubmit={handleSubmit} className="flexy" >
                    {/* update email */}
                <label htmlFor="">New Email: </label>
                <div>
                    <input onChange={inputHandle} name="changeEmail" value={updatedata.changeEmail} type="email" placeholder="Enter new email" />
                    {errorUpdate.changeEmail && <p>*{errorUpdate.changeEmail}</p>}
                </div>

                {/* update password*/}

                <label htmlFor="">New Password: </label>
                <div>
                    <input onChange={inputHandle} name="changePassword" value={updatedata.changePassword} type="password" placeholder="******" />
                    {errorUpdate.changePassword && <p>*{errorUpdate.changePassword}</p>}
                </div>

                {/* retye password */}

                <label htmlFor="">Re-type new Password: </label>
                <div>
                    <input onChange={inputHandle} name="retypePassword" value={updatedata.retypePassword} type="password" placeholder="******" />
                    {errorUpdate.retypePassword && <p>*{errorUpdate.retypePassword}</p>}
                </div>

                {/* update phonenumber */}

                <label htmlFor="">New Phone Number: </label>
                <div>
                    <input onChange={inputHandle} name="changePhoneNumber" value={updatedata.changePhoneNumber} type="tel" placeholder="+91..." />
                    {errorUpdate.changePhoneNumber && <p>*{errorUpdate.changePhoneNumber}</p>}
                </div>

                {/*  update and cancel buttons */}
                <button className="uandcBtn" type="submit">Update </button>
                <button onClick={updatemodalClose} className="uandcBtn" type="button">Cancel</button>
                

                </form>
                




            </div>
        </div>
        
    </div>
  )
}

export default UpdateDetails