import styles from "./About.module.css";

export default function About() {
    return (
        <div>
        <div className={styles.container}>   
            <h1 className={styles.header}>ABOUT US</h1>
            <hr className= {styles.line}></hr>
            
        </div>

        <div className={styles.container}>
            <p>We are a group of college students taking <em>Computer Engineering Technology at TUP - Cavite. </em>
               Our Goal is to help and promote the adoption of dogs via online advertisements and website endorsements since 2022.
               We're proud to help local dog shelters to promote their advocacy of saving and giving second and giving second chances to
               rescue dogs.
               </p> 
                
        </div>

        <div className={styles.dogs}>
            <marquee behavior="scroll" direction="right" width = "4000px" scrollamount="45">
                    <img src="wow.gif" alt="dog running"/>
            </marquee>
        </div>
        
        </div>
    )
}