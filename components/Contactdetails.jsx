import styles from "./Contactdetails.module.css";

export default function Contactdetails() {
    return (
        <div className={styles.container}>
            <table classname = {styles.socmed}>
                <tr>
                    <td><img src="email.png" alt="Email" /></td>
                    <td><h4>wonder.pets@gsfe.tupcavite.edu.ph</h4></td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>       
                    <td><img src="call.png" alt="Call" /></td>
                    <td><h4>+699890089009</h4></td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>   
                    <td><img src="fb.png" alt="Facebook" /></td>
                    <td><img src="twt.png" alt="Twitter" /></td>
                    <td><img src="ig.png" alt="Instagram" /></td>
                    <td><h4>WDP Rescuer Pups</h4></td>
                </tr>
            </table>
        </div>
    )
}