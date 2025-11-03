"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // 🔹 Runs only after component mounts (like your JS file did)
  useEffect(() => {
    const body = document.body;
    const navLinks = document.querySelector(`.${styles.navLinks}`);
    const overlay = document.querySelector(`.${styles.overlay}`);
    const links = document.querySelectorAll(`.${styles.navLinks} a`);
    const mobileBtn = document.querySelector(
      `.${styles.navBtnMobile} .${styles.navBtnContainer}`
    );

    function closeMenu() {
      setIsOpen(false);
      body.style.overflow = "auto";
    }

    if (overlay) overlay.addEventListener("click", closeMenu);
    links.forEach((link) => link.addEventListener("click", closeMenu));
    if (mobileBtn) mobileBtn.addEventListener("click", closeMenu);

    // Cleanup on unmount
    return () => {
      if (overlay) overlay.removeEventListener("click", closeMenu);
      links.forEach((link) => link.removeEventListener("click", closeMenu));
      if (mobileBtn) mobileBtn.removeEventListener("click", closeMenu);
    };
  }, []);

  // 🔹 Handle toggle (hamburger click)
  const toggleMenu = () => {
    const body = document.body;
    const newOpenState = !isOpen;
    setIsOpen(newOpenState);
    body.style.overflow = newOpenState ? "hidden" : "auto";
  };

  return (
    <section className={styles.navbarParent}>
      <header className={`${styles.navbar} parent`}>
        <div className={styles.navbarFirstPart}>
          {/* Logo */}
          <div className={styles.navLogo}>
            <Image
              src="/images/navbar/logo.svg"
              alt="logo"
              width={120}
              height={40}
              priority
            />
          </div>

          {/* Nav Links */}
          <div
            className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}
          >
            <div className={styles.navLinksA}>
              <div className={styles.navItem}>
                <Link href="#deals">Deals</Link>
                <div className={styles.helo} />
              </div>
              <div className={styles.navItem}>
                <Link href="#community">Community</Link>
                <div className={styles.helo} />
              </div>
            </div>

            {/* Mobile Sign-in */}
            <div className={styles.navBtnMobile}>
              <button className={styles.navBtnContainer}>
                <span className={styles.navBtnContent}>Sign In</span>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Sign-in */}
        <div className={styles.navBtn}>
          <button className={styles.navBtnContainer}>
            <span className={styles.navBtnContent}>Sign In</span>
          </button>
        </div>

        {/* Hamburger */}
        <button
          id="hamburger-btn"
          className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Overlay */}
      <div
        id="overlay"
        className={`${styles.overlay} ${isOpen ? styles.active : ""}`}
      />
    </section>
  );
}

