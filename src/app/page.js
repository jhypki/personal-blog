"use client";
import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import Image from "next/image";
import HeroHeader from "@/components/heroHeader/HeroHeader";
import PostLayout from "@/components/postLayout/PostLayout";
import { client } from "../../sanity/lib/client";
import Loading from "@/app/loading";

export default function Home() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "blogpost"] | order(publishedAt desc){
        title, image, category, publishedAt, body, "slug" : slug.current, "authorName": author->name, "authorImage": author->image, "authorSlug": author->slug.current}`;
      try {
        const foundPosts = await client.fetch(query);
        setPosts(foundPosts);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, []);
  if (loading) return <Loading />;
  return (
    <div className={styles.container}>
      <HeroHeader post={posts && posts[0]} />
      <PostLayout items={posts && posts} />
    </div>
  );
}
