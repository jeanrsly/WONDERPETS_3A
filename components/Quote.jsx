import styles from "./Quote.module.css";

export default function Quote() {
    return (
        <div>
        <div className={styles.rect2}> 
            <div className={styles.rect1} > 
                <img src="tanda.jpg" alt="" />
                <div className={styles.text3}>
                    <p>"Dogs are not our whole life, but they make our life whole."</p>
                    <h4>-Roger A. Caras</h4>
                </div>
                </div>
            </div>
        </div>
    )
}