import Image from 'next/image';

const PostImage = ({ className, classNameFig, src, alt, priority, sizes }) => {

  return (
    <figure className={classNameFig} >
      <Image
        className={className}
        src={src ?? '/fallback.jpg'}
        alt={alt}
        width={288}
        height={190}
        priority={priority}
        sizes={sizes}
      />
    </figure>
  );

};

export default PostImage;