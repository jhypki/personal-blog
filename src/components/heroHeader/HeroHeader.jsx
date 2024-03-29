import React from "react";
import styles from "./HeroHeader.module.css";
import Image from "next/image";

export default function HeroHeader() {
  return (
    <div className={styles.hero}>
      <Image src="/images/image.png" fill className={styles.image}></Image>
      <div className={styles.heroContent}>
        <div className={styles.badge}>Technology</div>
        <h1 className={styles.title}>
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>
        <div className={styles.author}>
          <div className={styles.authorImage}>
            <Image src="/images/author-temp.png" fill></Image>
          </div>
          <p className={styles.authorName}>Jason Francisco</p>
          <p className={styles.date}>August 20, 2022</p>
        </div>
      </div>
    </div>
  );
}
