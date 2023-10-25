import Image from 'next/image';

const Img = ({ className, classNameImg, src, alt }) => {

  return (
    <figure className={className}>
      <Image
        className={classNameImg}
        src={src ?? '/fallback.jpg'}
        alt={alt}
        width={288}
        height={190}
      />
    </figure>
  );

};

export default Img;