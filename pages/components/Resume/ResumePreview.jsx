import React from 'react';

const ResumePreview = ({ imageUrl, altText }) => (
  <div className="mb-6">
    <img
      src={imageUrl}
      alt={altText}
      className="mx-auto rounded border border-gray-200"
      style={{ maxHeight: '400px' }}
    />
  </div>
);

export default ResumePreview;