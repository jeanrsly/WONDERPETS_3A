import styles from "./Contactdetails.module.css";

export default function Contactdetails() {
    return (
        <div className={styles.container}>
                <img src="email.png" alt="Email" />
                <h4>wonder.pets@gsfe.tupcavite.edu.ph</h4>
                <br/>
                <img src="call.png" alt="Call" />
                <h4>+699890089009</h4>
                <div className={styles.icons}>
                <img src="fb.png" alt="Facebook" />
                <img src="twt.png" alt="Twitter" />
                <img src="ig.png" alt="Instagram" />
                </div>
                <h4>WDP Rescuer Pups</h4>

        </div>
    )
}