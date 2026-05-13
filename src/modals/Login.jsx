
// import "./LoginStyle.css";
import styles from "./Login.module.css"; 
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
// import { IoClose } from "react-icons/io5";
import { GiArtificialHive } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// invole navigate




const Login = ({ isOpen, onClose }) => {

    const navigate_page = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // errors

    const [errors, setErrors] = useState({

        email: "",
        password: ""
   })

    // sumbit form

    const handleSubmit =(e) => {
        e.preventDefault()

        setErrors({
            email:"",
            password:"",
        })
        if(email !== "test@bee.com"){
            setErrors({
                email:"Invalid email",
                password:"",
            })
            return
        }
        if(password !=="Passw0rd"){
            setErrors({
                email:"",
                password:"Invalid password"
            })

            return
        }
        else{
            navigate_page("/explore-teacher-list")
        }


        
    }


    if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} >
        
        <div className={styles.modalContent} >
            <button className={styles.closeBtn} onClick={onClose}>
                X
            </button>
            <form onSubmit={handleSubmit} className={styles.loginForm}>
                <h1><GiArtificialHive color="gold" size={40}  />Enter Hive</h1>
                <div>
                    <FaUser color="gold" size={19} />
                    <input value={email} onChange={function(e){
                        setEmail(e.target.value)
                    }} required type="email" name="email" id="" placeholder=' your email id ' />

                    {errors.email && <p className="emailError" >{errors.email}</p>}
                </div>
                <div>
                    <RiLockPasswordFill color="gold" size={19} />

                    <input value={password} onChange={function(e){
                        setPassword(e.target.value)
                    }} required type="password" name="" id="" placeholder=' your password ' />
                    {errors.password && <p className={styles.passwordError} >{errors.password}</p>}
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    </div>
  )
}

export default Login