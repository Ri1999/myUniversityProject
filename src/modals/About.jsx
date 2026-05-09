import styles from "./Login.module.css"; 


const About = ({open, close}) => {

        if(!open) return null;
    
    return (

    <div className={styles.modalOverlay}>
        <div className={styles.aboutModal} >
            <h2>About Project Bee</h2>
            <p>Project Bee is a local teacher discovery platform designed to connect students with trusted educators nearby. Instead of limiting learning to screens, Project Bee encourages real-world, face-to-face education that feels more personal, practical, and effective.

Whether you're looking for help in Mathematics, Science, Languages, Music, or other skills, Project Bee helps students discover teachers based on subject, location, and availability — all in one simple platform.

For teachers, Project Bee creates an opportunity to showcase expertise, reach local students, and grow their teaching presence without complicated setups or expensive promotions.

Our goal is simple:
make quality learning more accessible, local, and human.</p>
<button className={styles.aboutBtn} onClick={close}>Close</button>
        </div>
        
    </div>
  )
}

export default About