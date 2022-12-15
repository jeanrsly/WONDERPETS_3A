import styles from "./Why.module.css";

export default function Why() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.grow}>
          <img src="images.png" alt="" />
        </div>
        <div className={styles.grow}>
          <img src="images (1).png" alt="" />
        </div>
      </div> 
      <div className={styles.card}>
        <div className={styles.grow}>
          <img src="images (2).png" alt="" />
        </div>
        <div className={styles.grow}>
          <img src="images (3).png" alt="" />
        </div>
      </div>
      <div className={styles.message}>
        <h2>Why do we have to adopt instead of buying in a pet shop?</h2>
        <p>
        Various shelters still take in rescued dogs, but as they house more puppies, there isnt enough room or money for all of them. 
        If more people adopt dogs, a commodity will be created and a creature's life will be saved. 
        Instead of breeding and bringing another pup into our world, we can prevent overpopulation if we adopt dogs that already require assistance. 
        This will allow us to provide each dog with the care they deserve.
        </p>
      </div>
    </div>
  );
}

