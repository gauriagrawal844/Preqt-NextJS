import Image from "next/image";
import styles from "./ConnectionSection.module.css";

export default function FooterSection() {
  return (
    <section className={styles.footerSection}>
      <div className={styles.marq}>
        <div className={styles.marqInner}>
          <h2>
            Connect With a <span>Network Of Trusted Investors</span>
          </h2>
          <h2>
            Connect With a <span>Network Of Trusted Investors</span>
          </h2>
        </div>
      </div>

      <p className={styles.footerSubText}>
        Join our community to access verified investors, funding opportunities, and peer insights.
      </p>

      <div className={styles.heroBtnWrapper}>
        <div className={`${styles.heroBtnBlurBorder} ${styles.heroBtnLayer2}`}>
          <div className={styles.heroBtnBorder}></div>
        </div>

        <a className={styles.heroBtnA} href="#">
          <div className={styles.heroBtnGlowWrapper}>
            <div className={styles.heroBtnGlow1}></div>
            <div className={styles.heroBtnGlow2}></div>
          </div>

          <div className={styles.heroBtn}>
            <span className={styles.heroBtnText}>Get Started Today</span>
            <div className={styles.heroBtnIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-move-right"
                aria-hidden="true"
              >
                <path d="M18 8L22 12L18 16"></path>
                <path d="M2 12H22"></path>
              </svg>
            </div>
          </div>
        </a>
      </div>

      <div className={styles.footerImage}>
        <Image
          src="/images/footer/Globe.png"
          alt="footer-image"
          width={1200}
          height={596}
          priority
        />
      </div>
    </section>
  );
}
