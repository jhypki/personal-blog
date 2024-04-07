"use client";
import { useState, useEffect } from "react";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";
import styles from "./author.module.css";
import Link from "next/link";
import PostLayout from "@/components/postLayout/PostLayout";

export default function AuthorPage({ params }) {
  const { slug } = params;
  const [author, setAuthor] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const query = `*[_type == "author" && slug.current == "${slug}"][0]`;
      try {
        const currentAuthor = await client.fetch(query);
        setAuthor(currentAuthor);
        if (currentAuthor) {
          const postQuery = `*[_type== "blogpost" && author._ref == "${currentAuthor._id}"]`;
          const authorsPosts = await client.fetch(postQuery);
          setPosts(authorsPosts);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, [slug]);

  if (!author && !posts) return <div>Loading</div>;

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.personalData}>
          <div className={styles.imgContainer}></div>
          <div className={styles.data}>
            <div className={styles.name}></div>
            <div className={styles.title}></div>
          </div>
        </div>
        <div className={styles.bio}></div>
        <div className={styles.socials}>
          <Link href="/">F</Link>
          <Link href="/">T</Link>
          <Link href="/">I</Link>
          <Link href="/">Y</Link>
        </div>
      </div>

      <PostLayout items={posts && posts} />
    </div>
  );
}
