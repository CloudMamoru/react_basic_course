import React from 'react';
import PostItem from './PostItem';

// Применени деструкторизации пропсов
const PostList = ({ deletePost, posts, title }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((p, index) => (
        <PostItem index={index + 1} deletePost={deletePost} key={p.id} post={p} />
      ))}
    </div>
  );
};

export default PostList;
