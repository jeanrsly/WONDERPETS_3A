import styles from "./Navbar.module.css";
import {Link} from 'react-scroll';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="1.jpg" alt="logo"/>
        <img src="name.jpg" alt="name" />
      </div>
      <nav className={styles.navbarActions}>
        <Link to="about" spy={true} smooth={true} offset={-20} duration={500}><button>ABOUT US</button></Link>
        <Link to="why" spy={true} smooth={true} offset={50} duration={500}><button>WHY</button></Link>
        <Link to="benefits" spy={true} smooth={true} offset={-20} duration={500}><button>BENEFITS</button></Link>
      </nav>     
    </div>
  );
}
