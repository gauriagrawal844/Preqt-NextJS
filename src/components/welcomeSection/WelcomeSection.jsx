"use client";

import React, { useEffect } from "react";
import styles from "./WelcomeSection.module.css";

const WelcomeSection = () => {
  useEffect(() => {
    const section = document.querySelector(`.${styles.welcomeSection}`);
    const content1 = document.querySelector(`.${styles.content1}`);
    const content2 = document.querySelector(`.${styles.content2}`);

    if (!section || !content1 || !content2) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // 0 to 1 scroll progress ratio
      const scrollProgress = Math.min(Math.max(-rect.top / windowHeight, 0), 1);

      const opacity1 = 1 - scrollProgress * 1.5;
      const scale1 = 1 + scrollProgress * 0.2;
      const opacity2 = Math.max(0, scrollProgress * 1.5 - 0.2);
      const scale2 = 0.8 + scrollProgress * 0.2;

      content1.style.opacity = opacity1;
      content1.style.transform = `scale(${scale1}) translateY(${scrollProgress * -50}px)`;

      content2.style.opacity = opacity2;
      content2.style.transform = `scale(${scale2}) translateY(${(1 - scrollProgress) * 50}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.welcomeSection}>
      <img
        src="/images/welcome/overlay.png"
        alt="overlay"
        className={styles.welcomeOverlay}
      />

      <div className={styles.welcomeContainer}>
        <video
          className={styles.welcomeVideo}
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/images/welcome/0_Animation_Light_1920x1010.mp4"
            type="video/mp4"
          />
        </video>

        {/* Content 1 */}
        <div className={`${styles.welcomeContent} ${styles.content1}`}>
          <div className={styles.tagIndicator}>
            <span className={styles.bullet}>•</span> Welcome to pr.eqt.
          </div>
          <h1>
            <span>The Premier Platform for Private</span>
            <br />
            <span>Market Investing</span>
          </h1>
          <p className={styles.welcomeText}>
            Pr.eqt is a marketplace where ambitious founders and verified
            investors come together.
          </p>
        </div>

        {/* Content 2 */}
        <div className={`${styles.welcomeContent} ${styles.content2}`}>
          <div className={styles.tagIndicator}>
            <span className={styles.bullet}>•</span> So, why on earth was pr.eqt
            born?
          </div>
          <h1>
            <span>pr.eqt was created to unlock access</span>
            <br />
            <span>to private markets.</span>
          </h1>
          <p className={styles.welcomeSecondText}>
            Because founders needed faster capital, and investors wanted in
            before the hype.
            <br />
            pr.eqt brings them together — a backstage pass to IPO &amp; pre-IPO
            deals, made simple.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
