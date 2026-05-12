import styles from "./Login.module.css"

const Terms = ({close}) => {
  return (
    <div className={styles.modalOverlay}>
        <div className={styles.termsModal}  >
            <h2>Terms & Conditions</h2>
            <p>By using Project Bee, you agree to use the platform responsibly and respectfully.</p>
            <br />
            <p>Project Bee is a platform designed to help students and teachers connect for learning purposes. Users are responsible for the information they share and the interactions they make through the platform.</p>
            <br />
            <p>We aim to provide accurate and reliable information, but Project Bee does not guarantee the quality, availability, or outcomes of any teaching services listed on the platform.</p>
            <br />
            <h4>Users must avoid:</h4>
            <ul>
                <li>Sharing false or misleading information</li>
                <li>Misusing the platform or other user data</li>
                <li>Engaging in harmful, abusive, or illegal activities</li>
            </ul>
            <br />
            <p>Project Bee may update, modify, or remove platform features at any time to improve the user experience.</p>
            <p>By continuing to use the platform, you agree to these basic terms and conditions.</p>
            <br />
            <h3>Payments & Transactions</h3>
            <h4>Project Bee does not process or handle payments between students and teachers. Any fees, payments, or learning arrangements are managed directly between users at their own responsibility.</h4>
            <br />
            <h4>Project Bee is not responsible for disputes, losses, or issues related to personal transactions made outside the platform.</h4>
            <button className={styles.termBtn} onClick={close} type="button">Close</button>
        </div>
    </div>
  )
}

export default Terms