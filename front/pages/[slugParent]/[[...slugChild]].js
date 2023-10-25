import { useRouter } from 'next/router';
import { getSlugs, getPageByUri } from '../../utils/wordpress';

export default function Page( page ) {
  const router = useRouter()
  return (
    <p>Post: {router.query.slug}</p>
  );
}

export async function getStaticProps({ params = {} }) {
  const { slugParent, slugChild } = params;

  let pageUri = `${slugParent}/`;

  if (Array.isArray(slugChild) && slugChild.length > 0) {
    pageUri = `${pageUri}${slugChild.join('/')}/`;
  }
  
  const { page } = await getPageByUri(pageUri) || {};
  {console.log(page)}

  if (!page) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      page,
    },
  };
}


export async function getStaticPaths() {
  const paths = await getSlugs('pages');
  return {
    paths: [],
    fallback: 'blocking', // Set to true to handle dynamic paths not defined at build time
  };
}