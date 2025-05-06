// // utils/validatePost.js
// export const validatePost = (post) => {
//     if (!post || typeof post !== 'object') return null;
    
//     return {
//       id: post.id || '',
//       title: post.title || 'Untitled Post',
//       image: post.image || '/default-post-image.jpg',
//       date: post.date || 'No date',
//       author: post.author || 'Unknown author',
//       excerpt: post.excerpt || '',
//       tags: Array.isArray(post.tags) ? post.tags : [],
//       // add any other required fields
//     };
//   };