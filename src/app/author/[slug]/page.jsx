"use client";
import { useState, useEffect } from "react";
import { client } from "../../../../sanity/lib/client";

export default function AuthorPage({ params }) {
  const { slug } = params;
  const [author, setAuthor] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      const query = `*[_type == "author" && slug.current == "${slug}"][0]`;
      try {
        const currentAuthor = await client.fetch(query);
        setAuthor(currentAuthor);
        console.log(currentAuthor);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, [slug]);
  return <div>{author.name}</div>;
}
