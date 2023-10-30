import TextArea from '../partials/TextArea'
import Title from '../partials/Title'
import TitleLabel from '../partials/TitleLabel'
import PostsRelation from '../partials/PostsRelation'

const PostsSelect = ({ row, posts }) => {

  return (
    <>
      <div className="flex flex-col gap-1">
        <TitleLabel row={row}/>
        <Title row={row}/>
      </div>
      <TextArea row={row}/>
      <PostsRelation row={row} posts={posts}/>
    </>
  );

}

export default PostsSelect;