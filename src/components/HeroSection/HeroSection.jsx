"use client";

import React, { useEffect } from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  // ✅ Apply glow movement logic safely in React
  useEffect(() => {
    const wrappers = document.querySelectorAll(`.${styles.heroBtnWrapper}`);
    if (!wrappers || wrappers.length === 0) return;

    wrappers.forEach((wrapper) => {
      wrapper.style.setProperty("--gx", "0px");
      wrapper.style.setProperty("--gy", "0px");

      const handleMouseMove = (e) => {
        const rect = wrapper.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const gx = Math.round(x * 0.8);
        const gy = Math.round(y * 0.3);
        wrapper.style.setProperty("--gx", gx + "px");
        wrapper.style.setProperty("--gy", gy + "px");
      };

      wrapper.addEventListener("mousemove", handleMouseMove);

      // cleanup on unmount
      return () => wrapper.removeEventListener("mousemove", handleMouseMove);
    });
  }, []);

  return (
    <>
      {/* Top Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <video autoPlay muted loop className={styles.myVideo}>
            <source src="/images/hero/hero-banner.webm" type="video/webm" />
          </video>

          <div className={styles.heroContent}>
            <h1>
              <span>Access Exclusive</span>
              <br />
              <span>IPO &amp; Pre-IPO Deals</span>
            </h1>
            <p>
              Join the premier platform for private equity investments.
              <br />
              Get early access to high-growth companies before they go public.
            </p>

            <div className={styles.heroBtnWrapper}>
              <div
                className={`${styles.herobtnBlurborder} ${styles.herobtnLayer2}`}
              >
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
          </div>

          <div className={styles.heroImage}>
            <img
              className={styles.desktopView}
              src="/images/hero/image.png"
              alt="laser-flow"
            />
            <img
              className={styles.mobileView}
              src="/images/hero/mobile-video.png"
              alt="laser-flow"
            />
          </div>

          <img
            src="/images/hero/overlay.png"
            className={styles.heroOverlay}
            style={{ height: "150px", width: "100%" }}
            alt="overlay"
          />
        </div>
      </section>

      {/* Bottom Hero Section */}
      <div
        className={styles.heroBottomWrapper}
        style={{
          background: "#120a02",
          width: "100%",
          height: "100%",
          position: "relative",
          zIndex: 23,
        }}
      >
        <section
          className={`${styles.heroBottomContainer} parent`}
          style={{ paddingBottom: "50px" }}
        >
          <div className={styles.heroBottomContent}>
            <p>Everything you need to raise capital with confidence</p>

            <div className={styles.heroBottomList}>
              {[
                "Verified Deals",
                "Secure Data Rooms",
                "Investor Network",
                "Pre-IPO & IPO Access",
                "Real-Time Analytics",
                "Smart Tracking",
              ].map((item, index) => (
                <div key={index} className={styles.heroItem}>
                  <span className={styles.heroBottomText}>{item}</span>
                  {item !== "Smart Tracking" && (
                    <svg
                      className={styles.heroBullet}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A1A1AA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12.1" cy="12.1" r="1"></circle>
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <img
          src="/images/welcome/overlay.png"
          style={{ height: "100%", width: "100%" }}
          className={styles.heroOverlay2}
          alt="overlay bottom"
        />
      </div>
    </>
  );
};

export default HeroSection;
