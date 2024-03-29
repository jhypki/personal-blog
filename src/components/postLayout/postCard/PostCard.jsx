import React from "react";
import styles from "./PostCard.module.css";
import Image from "next/image";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/images/temp-post-image.png" fill></Image>
      </div>
      <div className={styles.categoryBadge}>Technology</div>
      <h2 className={styles.title}>
        The Impact of Technology on the Workplace: How Technology is Changing
      </h2>
      <div className={styles.author}>
        <div className={styles.authorImage}>
          <Image src="/images/author-temp.png" fill></Image>
        </div>
        <p className={styles.authorName}>Jason Francisco</p>
        <p className={styles.date}>August 20, 2022</p>
      </div>
    </div>
  );
};

export default PostCard;
