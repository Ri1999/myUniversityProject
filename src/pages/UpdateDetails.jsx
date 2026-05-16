import "./Details.css"

const UpdateDetails = ({updatemodalClose}) => {
  return (
    <div className="updateModalOverlay" >

        <div className="updateModalContent">
            <div className="updateContent">
                <form className="flexy" >
                    {/* update email */}
                <label htmlFor="">Change Email: </label>
                <div>
                    <input type="email" placeholder="Enter new email" />
                </div>

                {/* update password*/}

                <label htmlFor="">Change Password: </label>
                <div>
                    <input type="password" placeholder="******" />
                </div>

                {/* update phonenumber */}

                <label htmlFor="">Change Phone number: </label>
                <div>
                    <input type="tel" placeholder="+91..." />
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