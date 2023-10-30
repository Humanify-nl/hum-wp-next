import Image from 'next/image';

const AcfImage = ({ row, className, classNameFig, alt, priority, width, height, sizes, figcaption }) => {

  return (
    row.image && (
      <figure className={classNameFig} >
        <Image
          className={className}
          src={row.image.url ?? '/fallback.jpg'}
          alt={alt}
          width={width ?? 400}
          height={height ?? 300}
          priority={priority}
          sizes={sizes}
        />
        <figcaption>{figcaption}</figcaption>
    </figure>
    )
  );

}

export default AcfImage;