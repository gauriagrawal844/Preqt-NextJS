"use client";

import { useEffect } from "react";
import Image from "next/image";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./TestimonialsSection.module.css";

export default function TestimonialsSection() {
  useEffect(() => {
    // ✅ Import slick-carousel dynamically (avoids window error)
    import("slick-carousel").then(() => {
      // ✅ Register GSAP plugin
      gsap.registerPlugin(ScrollTrigger);

      // ✅ Desktop horizontal scroll
      if (window.innerWidth > 1024) {
        const section = document.querySelector(`.${styles.testimonialsSection}`);
        const scrollContent = document.querySelector(`.${styles.scrollContent}`);

        if (section && scrollContent) {
          const totalScrollWidth = scrollContent.scrollWidth;
          const windowWidth = window.innerWidth;
          const scrollDistance = totalScrollWidth - windowWidth + 400;

          gsap.to(scrollContent, {
            ease: "power2.inOut",
            x: -scrollDistance,
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => "+=" + scrollDistance * 1.2,
              scrub: 2,
              pin: true,
              anticipatePin: 1,
            },
          });
        }
      }

      // ✅ Mobile carousel init
      const initMobileCarousel = () => {
        const $track = $("#carouselTrackMob");
        if ($track.hasClass("slick-initialized")) return;

        $track.slick({
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          speed: 600,
          arrows: false,
          dots: true,
          pauseOnHover: true,
          pauseOnFocus: false,
          swipeToSlide: true,
          draggable: true,
          touchMove: true,
          cssEase: "ease",
          slidesToShow: 1,
          slidesToScroll: 1,
          responsive: [
            { breakpoint: 1025, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
          ],
        });
      };

      // ✅ Adjust spacing between slides
      const updateSlideSpacing = () => {
        const gap = 20;
        const slideWidth = $(".testimonialCardWrapper").outerWidth(true);

        $(".testimonialCardWrapper").each(function () {
          $(this).css({
            marginLeft: `${gap}px`,
            marginRight: `${gap}px`,
          });
        });

        const totalWidth =
          $(".testimonialCardWrapper").length * (slideWidth + gap);
        $(".slick-track").css("width", `${totalWidth}px`);
      };

      // ✅ Handle carousel init/destroy on viewport change
      const handleCarouselInit = () => {
        const $track = $("#carouselTrackMob");
        if (window.innerWidth <= 1024) {
          initMobileCarousel();
        } else {
          if ($track.hasClass("slick-initialized")) {
            $track.slick("unslick");
          }
        }
      };

      // ✅ Initial setup
      handleCarouselInit();
      updateSlideSpacing();

      // ✅ Resize handling
      $(window).on("resize", () => {
        handleCarouselInit();
        updateSlideSpacing();
      });

      // ✅ Cleanup
      return () => {
        $(window).off("resize");
        if ($("#carouselTrackMob").hasClass("slick-initialized")) {
          $("#carouselTrackMob").slick("unslick");
        }
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    });
  }, []);

  return (
    <section className={styles.testimonialsSection} id="testimonials">
      <div className={styles.testimonialsContainer}>
        <div className={styles.networkTag}>
          <span className={styles.bullet}>•</span> Testimonials
        </div>
        <h1>What investors are saying</h1>

        {/* ✅ Mobile carousel */}
        <div className={styles.carouselMob}>
          <div className={styles.carouselTrackMob} id="carouselTrackMob">
            {testimonials.map((t, i) => (
              <div className={styles.testimonialCardWrapper} key={i}>
                <div className={styles.testimonialCard}>
                  <p>{t.text}</p>
                  <div className={styles.profile}>
                    <Image
                      src="/images/investors/profile.svg"
                      alt={t.name}
                      width={52}
                      height={52}
                    />
                    <div>
                      <h3>{t.name}</h3>
                      <p>{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Desktop horizontal scroll */}
        <div className={styles.stickyContainer}>
          <div className={styles.scrollContent}>
            {testimonials.map((t, i) => (
              <div className={styles.testimonialCardWrapper} key={i}>
                <div className={styles.testimonialCard}>
                  <p>{t.text}</p>
                  <div className={styles.profile}>
                    <Image
                      src="/images/investors/profile.svg"
                      alt={t.name}
                      width={52}
                      height={52}
                    />
                    <div>
                      <h3>{t.name}</h3>
                      <p>{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Rahul Khanna",
    role: "Managing Director, Crestpoint Ventures",
    text: "“Through pr.eqt I discovered high-quality pre-IPO opportunities before they went mainstream. The due diligence tools and secure data rooms gave me confidence to move quickly.”",
  },
  {
    name: "Anita Mehra",
    role: "Angel Investor & Partner at Horizon Capital",
    text: "“pr.eqt’s investor tools gave me access to opportunities that were normally closed off. I could assess deals faster and with full transparency.”",
  },
  {
    name: "Marcus Veni",
    role: "Partner, Greybrook Investments",
    text: "“The best platform for accredited investors to explore pre-IPO markets. The experience was seamless and professional.”",
  },
  {
    name: "David Holt",
    role: "Venture Capitalist",
    text: "“The level of data transparency on pr.eqt is unmatched. It helped me make faster and more confident decisions.”",
  },
  {
    name: "Priya Singh",
    role: "Private Equity Partner",
    text: "“I’ve used pr.eqt across multiple deals, and it’s become my go-to source for discovering private investment opportunities.”",
  },
];
