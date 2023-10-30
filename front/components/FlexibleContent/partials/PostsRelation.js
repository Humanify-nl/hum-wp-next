import PostCard from 'components/PostCard';

const PostsRelation = ({ row, posts }) => {

  const allPosts = posts;
  const selectedIds = row.posts_select.map((single) => {
    const selectedPosts = allPosts.filter((selectedPost) => selectedPost.id === single.ID);
    return selectedPosts;  // Return the array of matching posts
  });

  const renderedPosts = selectedIds.map((post) => {
    return (      
      <PostCard
        className="bg-white p-4" 
        post={post[0]}
        key={post[0].id}
      />
    )
  });
  
  return (    
    <div className="flex flex-col gap-1">
      {renderedPosts}
    </div> 
  );

}

export default PostsRelation;