import React from 'react';
import CreatePost from '../containers/posts/CreatePost';
import AllPosts from '../containers/posts/AllPosts';

export default function App() {
  return (
    <>
    <section>
      <CreatePost/>
    </section>
    <section>
      <AllPosts />
    </section>
    </>
  );
}
