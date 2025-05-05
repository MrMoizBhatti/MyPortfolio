import React from 'react';
import Section from '../UI/Section';
import FeaturedPost from './FeaturedPost';
import PostCard from './PostCard';
import { blogData } from '../../data/blogData';

const BlogSection = () => (
  <Section
    id="blog"
    title="Blog & Insights"
    subtitle="Thoughts, tutorials, and perspectives on artificial intelligence and machine learning."
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {blogData.length > 0 && <FeaturedPost post={blogData[0]} />}
      {blogData.slice(1).map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  </Section>
);

export default BlogSection;