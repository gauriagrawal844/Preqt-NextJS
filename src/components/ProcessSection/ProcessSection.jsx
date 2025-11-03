"use client";
import React from "react";
import Image from "next/image";
import styles from "./ProcessSection.module.css";

const ProcessSection = () => {
  return (
    <section className={styles.processSection}>
      <div className={`${styles.processContainer} parent`}>
        <div className={styles.processImage}>
          <Image
            src="/images/process/process-left.png"
            alt="Process illustration"
            width={491}
            height={600}
          />
        </div>

        <div className={styles.processRight}>
          <div className={styles.networkTag}>
            <span className={styles.bullet}>•</span>
            Process
          </div>

          <h2>Get started in 3 simple steps</h2>

          <div className={styles.processCard}>
            <div className={styles.processCardImg}>
              <Image
                src="/images/process/card-1.png"
                alt="Create profile"
                width={620}
                height={290}
              />
            </div>
            <div className={styles.cardContent}>
              <h3>Create Your Profile</h3>
              <p>
                Sign up as a founder or investor. Complete your profile to
                unlock verified access.
              </p>
            </div>
          </div>

          <div className={styles.processCard}>
            <div className={styles.processCardImg}>
              <Image
                src="/images/process/card-2.png"
                alt="Explore & Connect"
                width={620}
                height={290}
              />
            </div>
            <div className={styles.cardContent}>
              <h3>Explore & Connect</h3>
              <p>
                Browse live deals, join the community, and engage with data
                rooms securely.
              </p>
            </div>
          </div>

          <div className={`${styles.processCard} ${styles.lastCard}`}>
            <div className={styles.processCardImg}>
              <Image
                src="/images/process/card-1.png"
                alt="Invest or Raise"
                width={620}
                height={290}
              />
            </div>
            <div className={styles.cardContent}>
              <h3>Invest or Raise</h3>
              <p>
                List your deal for funding or commit to opportunities — all in
                one seamless flow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
