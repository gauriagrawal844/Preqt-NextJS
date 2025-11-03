import Image from "next/image";
import styles from "./Footer.module.css";

const FooterBottom = () => {
  return (
    <footer className={styles.footerBottom}>
      <div className={styles.footerBottomImage}>
        <Image
          src="/images/footer/logo.svg"
          alt="Footer Logo"
          width={150}
          height={60}
        />
      </div>

      <nav className={styles.footerBottomNav}>
        <a href="#">Home</a>
        <a href="#">Deals</a>
        <a href="#">Community</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms And Conditions</a>
        <a href="#">Contact Us</a>
        <a href="#">Account</a>
      </nav>

      <hr className={styles.footerLine} />

      <div className={styles.footerBottomText}>
        © 2025 Pr.eqt. Private Ltd. | Powered by Passion, Driven by Discovery.
      </div>
    </footer>
  );
};

export default FooterBottom;
