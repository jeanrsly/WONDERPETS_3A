import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div>
        <img src="1.jpg" alt="logo"/>
        <img src="name.jpg" alt="name" />
      </div>
      <div className={styles.navbarActions}>
        <button>ABOUT US</button>
        <button>WHY</button>
        <button>BENEFITS</button>
      </div>     
      <form action="" className={styles.searchbar}>
        <button type="submit"><img src="search.png" alt="search icon" /></button>
        <input type="text" placeholder="Search Nearby Adoption Center" name="q"/>
      </form>
    </div>
  );
}
