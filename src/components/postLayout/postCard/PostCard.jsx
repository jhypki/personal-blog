import React from "react";
import styles from "./PostCard.module.css";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import Link from "next/link";

const PostCard = ({
  post: {
    image,
    category,
    title,
    authorName,
    authorImage,
    authorSlug,
    publishedAt,
    slug,
  },
}) => {
  return (
    <div className={styles.container}>
      <Link href={`/post/${slug}`}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src={urlForImage(image)} fill></Image>
        </div>
      </Link>
      <div className={styles.categoryBadge}>
        {category.length > 10 ? `${category.slice(0, 7)}...` : category}
      </div>
      <Link href={`/post/${slug}`}>
        <h2 className={styles.title}>
          {title.length > 55 ? `${title.slice(0, 55)}...` : title}
        </h2>
      </Link>
      <div className={styles.author}>
        <Link href={`/author/${authorSlug}`}>
          <div className={styles.authorImageContainer}>
            <Image
              className={styles.authorImage}
              src={urlForImage(authorImage)}
              fill
            ></Image>
          </div>
        </Link>
        <Link href={`/author/${authorSlug}`}>
          <p className={styles.authorName}>{authorName}</p>
        </Link>
        <p className={styles.date}>{publishedAt.slice(0, 10)}</p>
      </div>
    </div>
  );
};

export default PostCard;
