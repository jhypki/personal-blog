import React from "react";
import styles from "./HeroHeader.module.css";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";

export default function HeroHeader({
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
}) {
  if (image)
    return (
      <div className={styles.hero}>
        <Link href={`/post/${slug}`}>
          <div className={styles.imgContainer}>
            <Image src={urlForImage(image)} fill className={styles.image} />
          </div>
        </Link>
        <div className={styles.heroContent}>
          <div className={styles.badge}>{category}</div>
          <Link href={`/post/${slug}`}>
            <h1 className={styles.title}>{title}</h1>
          </Link>
          <div className={styles.author}>
            <Link href={`/author/${authorSlug}`}>
              <div className={styles.authorImage}>
                <Image
                  src={urlForImage(authorImage)}
                  className={styles.image}
                  fill
                />
              </div>
            </Link>
            <Link href={`/author/${authorSlug}`}>
              <p className={styles.authorName}>{authorName}</p>
            </Link>
            <p className={styles.date}>{publishedAt.slice(0, 10)}</p>
          </div>
        </div>
      </div>
    );
}
