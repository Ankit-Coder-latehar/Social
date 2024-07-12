
import React from 'react';

const BlogPost = ({ post }) => {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <button onClick={() => alert('Read More')}>Read More</button>
    </div>
  );
};

export default BlogPost;
