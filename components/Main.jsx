import styles from "./Main.module.css";

export default function Main() {
    return (
        <div className={styles.container}>   
            <div className={styles.grow}>
                <img src="dogs.png" alt="" />
            </div>
        </div>
    )
}