
import styles from "./Login.module.css"; 

const Privacy_Policy = ({ close }) => {
  return (
    <div className={styles.modalOverlay} >
      <div className={styles.privacyModal}>
        <h2> Privacy Policy</h2>
        <p>At Project Bee, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the information shared on our platform.</p>
        <p>Project Bee values your privacy and aims to keep your information safe and secure.

We may collect basic information such as names, email addresses, profile details, and messages submitted through the platform. This information is used only to improve user experience and help connect students with teachers.

Project Bee may use trusted third-party services for hosting, analytics, authentication, or communication features. These services may process limited data required for platform functionality.

We do not intentionally misuse user information or share personal data beyond what is necessary to operate the platform.

By using Project Bee, you agree to the basic collection and use of information described in this policy.

For support or concerns, contact: <b>patraarittik1999@gmail.com</b></p>
<button onClick={close} className={styles.privacyBtn} type="button">Close</button>
      </div>
    </div>
  )
}

export default Privacy_Policy