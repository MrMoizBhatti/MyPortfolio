import React from 'react';
import Card, { CardImage, CardBody } from '../UI/Card';
import { Calendar, User, ArrowRight } from 'lucide-react';

const FeaturedPost = ({ post }) => {
  // Validate post exists and has required properties
  if (!post || typeof post !== 'object') {
    return <div className="md:col-span-3 p-4 bg-gray-100 rounded-lg">No featured post available</div>;
  }

  // Provide default values
  const {
    image = '/default-post-image.jpg',
    title = 'Untitled Post',
    date = 'No date',
    author = 'Unknown author',
    excerpt = '',
    tags = [],
    id = ''
  } = post;

  return (
    <Card className="md:col-span-3 flex flex-col md:flex-row h-full">
      <CardImage
        src={image}
        alt={title}
        className="md:w-1/2 h-64 md:h-auto"
      />
      <CardBody className="md:w-1/2">
        <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3">
          <span className="flex items-center mr-4">
            <Calendar size={14} className="mr-1" />
            {date}
          </span>
          <span className="flex items-center">
            <User size={14} className="mr-1" />
            {author}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        {excerpt && <p className="text-gray-600 mb-4">{excerpt}</p>}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, idx) => (
              <span key={idx} className="inline-block px-2 py-1 text-xs bg-gray-200 text-gray-700 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
        <a
          href={`/blog/${id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          Read More <ArrowRight size={16} className="ml-1" />
        </a>
      </CardBody>
    </Card>
  );
};

export default FeaturedPost;