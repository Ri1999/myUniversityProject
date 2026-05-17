
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

    // sumbit form api integration

    const handleSubmit = async (e) => {

    e.preventDefault();

    setErrors({
        email: "",
        password: "",
    });

    try {

        const response = await fetch(
            "http://localhost:5000/api/auth/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email,
                    password
                })
            }
        );

        const data = await response.json();

        console.log(data);

        if (!response.ok) {

            setErrors({
                email: " ",
                password: data.message
            });

            return;
        }

        localStorage.setItem("token", data.token);

        navigate_page("/explore-teacher-list");

    } catch (error) {

        console.log(error);

        setErrors({
            email: "",
            password: "Server error"
        });
    }
};




    
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