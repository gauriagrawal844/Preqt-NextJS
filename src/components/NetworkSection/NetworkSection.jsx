// ...existing code...
'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import styles from './NetworkSection.module.css';

export default function NetworkSection() {
  useEffect(() => {
    // Counter Animation
    let counterStarted = false;

    function animateCounters() {
      if (counterStarted) return;

      const sectionEl = document.querySelector(`.${styles.counterSection}`);
      if (!sectionEl) return; // guard: element might not exist yet

      const sectionTop = sectionEl.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight - 100) {
        counterStarted = true;
        const counters = document.querySelectorAll(`.${styles.counter}`);
        counters.forEach((counter) => {
          const target = +counter.getAttribute('data-target') || 0;
          const increment = target / 200;

          let current = 0;
          const updateCounter = () => {
            current += increment;
            if (current < target) {
              counter.textContent = Math.floor(current).toLocaleString();
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target.toLocaleString();
            }
          };
          updateCounter();
        });
      }
    }

    // run once on mount
    animateCounters();
    window.addEventListener('scroll', animateCounters, { passive: true });

    // Network Section Card Animations
    const cardsContainer = document.querySelector(`.${styles.cardsContainer}`);
    const cards = document.querySelectorAll(`.${styles.chooseCard}`);
    let cardsAnimated = false;

    // we keep a reference so we can remove it on cleanup
    let cardsFollowScroll = null;

    function animateNetworkCards() {
      if (!cardsContainer || cardsAnimated) return;

      const containerTop = cardsContainer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (containerTop < windowHeight * 0.8) {
        cardsAnimated = true;

        const initialSpacing = 200;

        cards.forEach((card, index) => {
          card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
          card.style.opacity = '0';
          card.style.transform = `translateY(${initialSpacing + index * 80}px)`;

          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = `translateY(${index * 40}px)`;
          }, index * 300);
        });

        // follow scroll to adjust spacing; define handler so we can remove it later
        cardsFollowScroll = () => {
          const newContainerTop = cardsContainer.getBoundingClientRect().top;
          const scrollProgress = Math.max(
            0,
            Math.min(1, (window.scrollY - newContainerTop) / (windowHeight * 0.5))
          );

          cards.forEach((card, index) => {
            const finalSpacing = 40;
            const currentSpacing = initialSpacing * (1 - scrollProgress) + finalSpacing;
            card.style.transform = `translateY(${index * currentSpacing}px)`;
          });
        };

        window.addEventListener('scroll', cardsFollowScroll, { passive: true });
      }
    }

    const scrollHandler = () => {
      if (!cardsAnimated) {
        requestAnimationFrame(animateNetworkCards);
      }
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    // ensure cards animation runs if already in view
    requestAnimationFrame(animateNetworkCards);

    return () => {
      window.removeEventListener('scroll', animateCounters);
      window.removeEventListener('scroll', scrollHandler);
      if (cardsFollowScroll) {
        window.removeEventListener('scroll', cardsFollowScroll);
      }
    };
  }, []);

  return (
    <section className={styles.networkSection}>
      <div className={styles.networkOverlay}>
        <Image
          src="/images/network/overlay.png"
          alt="overlay"
          width={1920}
          height={150}
          priority
        />
      </div>

      <div className={`${styles.counterSection} parent`}>
        <div className={styles.counterBox}>
          <h4>
            $<span className={styles.counter} data-target="2">0</span>.3B+
          </h4>
          <p>Volume</p>
        </div>

        <div className={styles.networkLine}></div>
        <div className={styles.counterBox}>
          <h4>
            <span className={styles.counter} data-target="500">0</span>+
          </h4>
          <p>Deals</p>
        </div>

        <div className={styles.networkLine}></div>
        <div className={styles.counterBox}>
          <h4>
            <span className={styles.counter} data-target="50">0</span>K+
          </h4>
          <p>Members</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className={styles.networkMainContainer}>
        <div className={`${styles.chooseSection} parent`}>
          <div className={styles.networkHeader}>
            <div className={styles.networkTag}>
              <span className={styles.bullet}>•</span>
              Why Choose Us
            </div>
            <div>
              <h1>A network where founders, retail investors, and</h1>
              <h1>
                <span>institutions connect.</span>
              </h1>
            </div>
            <p>The seamless, trusted platform for founders and investors.</p>
          </div>

          <div className={styles.cardsContainer}>
            {/* Card 1 */}
            <div className={`${styles.chooseCard} ${styles.card1}`}>
              <div className={styles.cardInner}>
                <div className={styles.cardLeft}>
                  <div className={styles.cardLeftText}>Trust & Transparency</div>
                  <div className={styles.cardLeftDesc}>
                    Every deal depends on credibility and verified transactions,
                    ensuring secure data rooms and transparent processes that
                    investors can trust.
                  </div>
                  <div className={styles.cardLeftList}>
                    <div className={styles.cardList}>
                      <div>
                        <Image
                          src="/images/network/icon1.svg"
                          alt="tick"
                          width={24}
                          height={24}
                        />
                      </div>
                      <p>
                        Verified deals and secure processes ensure credibility.
                      </p>
                    </div>

                    <div className={styles.cardList}>
                      <div>
                        <Image
                          src="/images/network/icon2.svg"
                          alt="lock"
                          width={24}
                          height={24}
                        />
                      </div>
                      <p>
                        Access exclusive opportunities typically reserved for
                        institutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.cardRight}>
                  <Image
                    src="/images/network/image1.png"
                    alt="handshake"
                    width={500}
                    height={400}
                  />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className={`${styles.chooseCard} ${styles.card2}`}>
              <div className={styles.cardInner}>
                <div className={styles.cardRight}>
                  <Image
                    src="/images/network/image2.png"
                    alt="lightbulb"
                    width={500}
                    height={400}
                  />
                </div>
                <div className={styles.cardLeft}>
                  <div className={styles.cardLeftText}>Flexibility & Growth</div>
                  <div className={styles.cardLeftDesc}>
                    Raise capital pre-IPO or IPO, gain growth insights, and
                    connect with a thriving founder-investor network.
                  </div>
                  <div className={styles.cardLeftList}>
                    <div className={styles.cardList}>
                      <div>
                        <Image
                          src="/images/network/icon3.svg"
                          alt="tick"
                          width={24}
                          height={24}
                        />
                      </div>
                      <p>Raise capital in both private and public markets.</p>
                    </div>

                    <div className={styles.cardList}>
                      <div>
                        <Image
                          src="/images/network/icon4.svg"
                          alt="lock"
                          width={24}
                          height={24}
                        />
                      </div>
                      <p>
                        Participate in funding rounds before companies go public.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className={`${styles.chooseCard} ${styles.card3}`}>
              <div className={styles.cardInner}>
                <div className={styles.cardLeft}>
                  <div className={styles.cardLeftText}>Speed & Intelligence</div>
                  <div className={styles.cardLeftDesc}>
                    Move faster with technology that delivers real-time
                    intelligence, smart tracking, and analytics for sharper
                    decision-making.
                  </div>
                  <div className={styles.cardLeftList}>
                    <div className={styles.cardList}>
                      <div>
                        <Image
                          src="/images/network/icon5.svg"
                          alt="tick"
                          width={24}
                          height={24}
                        />
                      </div>
                      <p>
                        Process deals in milliseconds with our matching engine.
                      </p>
                    </div>

                    <div className={styles.cardList}>
                      <div>
                        <Image
                          src="/images/network/icon6.svg"
                          alt="lock"
                          width={24}
                          height={24}
                        />
                      </div>
                      <p>
                        Use analytics and search tools to close deals faster.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.cardRight}>
                  <Image
                    src="/images/network/image3.png"
                    alt="chess"
                    width={500}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// ...existing code...