import React from "react";
import styles from "./PostLayout.module.css";
import PostCard from "./postCard/PostCard";

const postLayout = ({ items }) => {
  console.log(items);
  return (
    <div className={styles.container}>
      <h3>Latest Posts</h3>
      <div className={styles.posts}>
        {items?.map((item) => (
          <PostCard post={item} key={item._id} />
        ))}
      </div>
      <button className={styles.viewAll}>View All Posts</button>
    </div>
  );
};

export default postLayout;
