import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BlogPost from '../components/BlogPost';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setBlogPosts(response.data);
    };
    fetchBlogPosts();
  }, []);

  return (
        
    <>
        <Navbar />
        <Header name="Blog"/>


        <div className="max-w-screen-lg mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {blogPosts.map(post => (
                <BlogPost key={post.id} post={post} />
                ))}
            </div>
        </div>
    <Footer />
    
    </>



    
  );
};

export default Blog;
