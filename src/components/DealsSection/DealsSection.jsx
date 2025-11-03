"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./DealsSection.module.css";

const faqs = [
  {
    id: 1,
    question: "Q1. What types of deals are available?",
    answer:
      "You can explore Pre-IPO, Private Equity, and Venture-backed deals verified through our due diligence process.",
  },
  {
    id: 2,
    question: "Q2. Who can invest in these deals?",
    answer:
      "Both accredited individuals and institutional investors with KYC-compliant profiles can participate.",
  },
  {
    id: 3,
    question: "Q3. How are deals verified?",
    answer:
      "Our in-house analysts validate every deal for authenticity, legal compliance, and market viability.",
  },
  {
    id: 4,
    question: "Q4. Can I track my investments in the app?",
    answer:
      "Yes! The app includes a built-in portfolio tracker that updates your returns and lock-in timelines.",
  },
  {
    id: 5,
    question: "Q5. Are there minimum investment limits?",
    answer:
      "Minimum investment requirements vary by deal type and are clearly displayed before you commit.",
  },
  {
    id: 6,
    question: "Q6. How can I get updates on new opportunities?",
    answer:
      "Enable deal alerts in your app settings to get notified instantly when new opportunities go live.",
  },
];

const DealSection = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <section className={styles.dealSection}>
      <div className={`${styles.dealContainer} parent`}>
        <h2>
          Get the Preqt. App – The Deals You <br /> Want, Wherever You Are.
        </h2>

        <div className={styles.dealShowcase}>
          <div className={styles.phoneFrame}>
            <Image
              src="/images/deals/image.png"
              alt="App Screenshot"
              width={1198}
              height={539}
              priority
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className={styles.faqContainer}>
          <div className={styles.faqColumn}>
            {faqs.slice(0, 3).map((faq) => (
              <div
                key={faq.id}
                className={`${styles.faqItem} ${
                  activeFaq === faq.id ? styles.active : ""
                }`}
                onClick={() => toggleFaq(faq.id)}
              >
                <div className={styles.faqQuestion}>
                  <span>{faq.question}</span>
                  <span className={styles.icon}>
                    <Image
                      src="/images/deals/Arrow.svg"
                      alt="Arrow"
                      width={20}
                      height={20}
                    />
                  </span>
                </div>
                {activeFaq === faq.id && (
                  <div className={styles.faqAnswer}>
                    <p className={styles.faqAnswerText}>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.faqColumn}>
            {faqs.slice(3).map((faq) => (
              <div
                key={faq.id}
                className={`${styles.faqItem} ${
                  activeFaq === faq.id ? styles.active : ""
                }`}
                onClick={() => toggleFaq(faq.id)}
              >
                <div className={styles.faqQuestion}>
                  <span>{faq.question}</span>
                  <span className={styles.icon}>
                    <Image
                      src="/images/deals/Arrow.svg"
                      alt="Arrow"
                      width={20}
                      height={20}
                    />
                  </span>
                </div>
                {activeFaq === faq.id && (
                  <div className={styles.faqAnswer}>
                    <p className={styles.faqAnswerText}>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealSection;
