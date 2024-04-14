"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";
import styles from "./post.module.css";
import Loading from "@/app/loading";
import Link from "next/link";
import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";

const PostPage = ({ params }) => {
  const { slug } = params;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      const query = `*[_type == "blogpost" && slug.current == "${slug}"][0]{
        title,
        slug,
        image,
        body,
        publishedAt,
        category,
        "authorName": author->name,
        "authorImage": author->image,
        "authorSlug": author->slug.current,
      }`;
      try {
        const currentPost = await client.fetch(query);
        setPost(currentPost);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, [slug]);
  if (loading) return <Loading />;
  if (!post) return <div>Post Not Found</div>;
  return (
    <div className={styles.container}>
      <div className={styles.category}>{post.category}</div>
      <h1>{post.title}</h1>
      <div className={styles.author}>
        <div className={styles.authorImgContainer}>
          <Link href={`/author/${post.authorSlug}`}>
            <Image
              src={urlForImage(post.authorImage)}
              alt="author"
              fill
              className={styles.image}
            />
          </Link>
        </div>
        <Link href={`/author/${post.authorSlug}`}>
          <p>{post.authorName}</p>
        </Link>
        <p>{post.publishedAt.slice(0, 10)}</p>
      </div>
      <div className={styles.postImgContainer}>
        <Image
          src={urlForImage(post.image)}
          alt="post"
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.postBody}>
        <BlockContent blocks={post.body} />
      </div>
    </div>
  );
};

export default PostPage;
