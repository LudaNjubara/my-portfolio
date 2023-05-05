import React from "react";

import constants from "@constants/pageContent";

import styles from "./heroSection.module.scss";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

function HeroSection() {
  return (
    <>
      <Script src="/static/scripts/hoverEffect.js" strategy="beforeInteractive" />

      <section className={styles.heroSection__wrapper}>
        <div className={styles.heroSection__content}>
          {/* Me card */}
          <div className={`${styles.big} ${styles.card}`}>
            <div className={styles.card_border}></div>
            <div className={styles.card_content}>
              <Image
                className={styles.card_content__image}
                src="/static/images/heroSection/hero_section_image.jpg"
                alt="Picture of the author"
                loading="eager"
                fill
                priority
              />
              <div className={styles.card_content__titleContainer}>
                <h1 className={styles.card_content__title}>
                  {constants.heroSection.title}{" "}
                  <span className={styles.card_content__title__name}>{constants.global.firstName}</span>, a
                </h1>
                <h2 className={styles.card_content__subtitle}>{constants.heroSection.subtitle}</h2>
              </div>
              <div className={styles.card_content__description_border}>
                <p className={styles.card_content__description}>{constants.heroSection.description}</p>
              </div>
            </div>
          </div>

          {/* Github card */}
          <div className={`${styles.small} ${styles.social_github} ${styles.card}`}>
            <div className={styles.card_border}></div>
            <div className={styles.card_content}>
              <iframe
                src="https://my.spline.design/githublogo-b1820d57c3f08a2a9aabc06a1b434bcb/"
                width="100%"
                height="100%"
              ></iframe>
              <div className={styles.card_content__container}>
                <Link href={constants.global.social.github}>Visit my Github </Link>
              </div>
            </div>
          </div>

          {/* Projects card */}
          <div className={`${styles.small} ${styles.projects} ${styles.card}`}>
            <div className={styles.card_border}></div>
            <div className={styles.card_content}>
              <Image
                src="/static/images/heroSection/hero_section_projects_background.png"
                alt="Projects background"
                fill
                loading="eager"
                priority
              />
              <a href="#projects">
                <h2>{constants.heroSection.cards.projects.title}</h2>
                <p>{constants.heroSection.cards.projects.description}</p>
              </a>
            </div>
          </div>

          {/* Services card */}
          <div className={`${styles.small} ${styles.services} ${styles.card}`}>
            <div className={styles.card_border}></div>
            <div className={styles.card_content}>
              <Image
                src="/static/images/heroSection/hero_section_services_background.jpg"
                alt="Services background"
                fill
                loading="eager"
                priority
              />
              <a href="#services">
                <h2>{constants.heroSection.cards.services.title}</h2>
                <p>{constants.heroSection.cards.services.description}</p>
              </a>
            </div>
          </div>

          {/* Contact card */}
          <div className={`${styles.small} ${styles.contact} ${styles.card}`}>
            <div className={styles.card_border}></div>
            <div className={styles.card_content}>
              <Image
                src="/static/images/heroSection/hero_section_contact_background.jpg"
                alt="Contact background"
                fill
                loading="eager"
                priority
              />
              <a href="#contact">
                <h2>{constants.heroSection.cards.contact.title}</h2>
                <p>{constants.heroSection.cards.contact.description}</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
