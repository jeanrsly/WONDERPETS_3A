import styles from "./Benefits.module.css";

export default function Benefits() {
    return (
        <div>
        <div className={styles.container}>
            <div className={styles.body}>
                <h1>BENEFITS</h1> 
                <hr className={styles.line}/>             
            </div>
        </div>
        
        <div className={styles.body}>
            <p>
                Owning a dog can help you stay active because dogs are
                lively and can lower your risk of heart disease and a heart attack.
                Dogs have a special way of having a beneficial impact on their
                owners’ health, which can naturally lower blood pressure levels.
                Finally, due to their clinginess and happiness to see their owner
                at their side, dogs can assist reduce stress levels. In a world
                where second chances are generally uncommon, the dog you
                adopt will also benefit by giving them the opportunity to start a
                new life and by keeping them away from potentially harmful
                situations that typically involve cruelty and abuse.
                </p>
            </div>  
        <div>
        </div>
        </div>

    );
}