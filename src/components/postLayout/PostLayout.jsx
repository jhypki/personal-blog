import React from "react";
import styles from "./PostLayout.module.css";
import PostCard from "./postCard/PostCard";

const postLayout = () => {
  return (
    <div className={styles.container}>
      <h3>Latest Posts</h3>
      <div className={styles.posts}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <button className={styles.viewAll}>View All Posts</button>
    </div>
  );
};

export default postLayout;
