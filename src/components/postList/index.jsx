import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // WordPress API'ye istek yap
    axios.get('https://bereketlimetal.com/wp-json/wp/v2/posts?per_page=100')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error.response);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tüm Yazılar</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="mb-4 p-4 border rounded shadow bg-white">
            <h2 className="text-xl font-bold">{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} className="my-2" />
            <a href={post.link} className="text-blue-500 hover:underline">Devamını oku</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
