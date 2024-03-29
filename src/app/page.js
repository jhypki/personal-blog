import React from "react";
import styles from "./home.module.css";
import Image from "next/image";
import HeroHeader from "@/components/heroHeader/HeroHeader";
import PostLayout from "@/components/postLayout/PostLayout";

export default function Home() {
  return (
    <div className={styles.container}>
      <HeroHeader />
      <PostLayout />
    </div>
  );
}
