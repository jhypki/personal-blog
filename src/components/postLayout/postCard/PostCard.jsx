import React from "react";
import styles from "./PostCard.module.css";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";

const PostCard = ({ post, author }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={urlForImage(post.image)} fill></Image>
      </div>
      <div className={styles.categoryBadge}>{post.category}</div>
      <h2 className={styles.title}>{post.title}</h2>
      <div className={styles.author}>
        <div className={styles.authorImage}>
          <Image src="/images/author-temp.png" fill></Image>
        </div>
        <p className={styles.authorName}>author</p>
        <p className={styles.date}>August 20, 2022</p>
      </div>
    </div>
  );
};

export default PostCard;
