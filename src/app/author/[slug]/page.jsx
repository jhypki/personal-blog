"use client";
import { useState, useEffect } from "react";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";
import styles from "./author.module.css";
import Link from "next/link";
import PostLayout from "@/components/postLayout/PostLayout";
import Image from "next/image";
import Loading from "@/app/loading";

export default function AuthorPage({ params }) {
  const { slug } = params;
  const [author, setAuthor] = useState(null);
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const query = `*[_type == "author" && slug.current == "${slug}"][0]`;
      try {
        const currentAuthor = await client.fetch(query);
        setAuthor(currentAuthor);
        if (currentAuthor) {
          const postQuery = `*[_type== "blogpost" && author._ref == "${currentAuthor._id}"]{
            title, image, category, publishedAt, body, "slug" : slug.current, "authorName": author->name, "authorImage": author->image, "authorSlug": author->slug.current}`;
          const authorsPosts = await client.fetch(postQuery);
          setPosts(authorsPosts);
          setLoading(false);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, [slug]);

  if (loading) return <Loading />;
  if (!author && !posts) return <div>Page Not Found</div>;

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.personalData}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.authorImg}
              src={urlForImage(author.image)}
              fill
            />
          </div>
          <div className={styles.data}>
            <div className={styles.name}>{author.name}</div>
            <div className={styles.title}>Title</div>
          </div>
        </div>
        <div className={styles.bio}>{author.bio}</div>
        <div className={styles.socials}>
          <Link href="/">
            <p></p>
          </Link>
          <Link href="/">
            <p></p>
          </Link>
          <Link href="/">
            <p></p>
          </Link>
          <Link href="/">
            <p></p>
          </Link>
        </div>
      </div>

      <PostLayout items={posts && posts} />
    </div>
  );
}
