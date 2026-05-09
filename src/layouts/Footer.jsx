import {  useState } from "react";
import { SiHoneygain } from "react-icons/si";
import Privacy_Policy from '../modals/Privacy_Policy';
import Terms from "../modals/Terms";
const Footer = () => {

  const [privacyOpen, setPrivacyOpen] = useState(false)

  const [termsOpen, setTermsOpen] = useState(false)



  return (
    <div>
      <footer>
        <div className="top-footer">
          <h3>Find teachers for every subject, from Math to Sanskrit — start your journey today.</h3>
        </div>
        <div className="bottom-footer">
          <h4>© 2026 Project Bee <SiHoneygain size={19} color='#F7CE4C'/>
. <a onClick={function(e){
  e.preventDefault();
  setPrivacyOpen(true)
}}  href="#">Privacy Policy</a> . <a onClick={function(e){
  e.preventDefault();
  setTermsOpen(true);
}} href="#">Terms</a></h4>
        </div>
      </footer>



      { privacyOpen && <Privacy_Policy close={function(){
        setPrivacyOpen(false)
      }} />}

      {termsOpen && <Terms close={function(){
        setTermsOpen(false)
      }} />}
      
    </div>
  )
}

export default Footer