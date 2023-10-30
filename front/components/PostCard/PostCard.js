import ClassName from 'models/classname';
import Link from 'next/link';
import PostImage from 'components/PostImage';
import { getDate } from '../../utils/utils';

const PostCard = ( {className, post} ) => {

  const PostCardClassName = new ClassName("card-preview flex gap-4");
  PostCardClassName.addIf(className, className).toString();

  return (
    <Link href={`/posts/${post.slug}`}>
      <article className={PostCardClassName}>
        <PostImage
          src={ post?.featured_img_url }
          alt="Picture"
          className="basis-3/12"
          classNameImg="aspect-4/3 rounded"
        />
        <div className="card-body basis-9/12 flex flex-col gap-4">
          <h3 className="card-title text-xl">{ post.title.rendered }</h3>
          <div
            className="card-text"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          >
          </div>
          <p className="card-text">
            <small className="text-sm">On {getDate(post.modified)}</small>
          </p>
        </div>
      </article>
    </Link>
  )
}

export default PostCard;