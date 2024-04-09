"use client";
import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import Image from "next/image";
import HeroHeader from "@/components/heroHeader/HeroHeader";
import PostLayout from "@/components/postLayout/PostLayout";
import { client } from "../../sanity/lib/client";

export default function Home() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "blogpost"]`;
      try {
        const foundPosts = await client.fetch(query);
        setPosts(foundPosts);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, []);
  if (!posts) return <div>Loading</div>;
  return (
    <div className={styles.container}>
      <HeroHeader />
      <PostLayout items={posts && posts} />
    </div>
  );
}
