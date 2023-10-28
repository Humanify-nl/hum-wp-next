import { getPages, getPageByUri } from '../../utils/wordpress';

export default function Page( {page} ) {

  return (
    <>
    <p>{page.title.rendered}</p>
    </>
  );
}

export async function getStaticProps({ params = {} }) {
  const { slugParent, slugChild } = params;

  let pageUri = `${slugParent}/`;

  if (Array.isArray(slugChild) && slugChild.length > 0) {
    pageUri = `${pageUri}${slugChild.join('/')}/`;
  }
  
  const pageData = await getPageByUri(pageUri);

  if (!pageData || !pageData[0] || !pageData[0].title || !pageData[0].title.rendered) {
    return {
      props: {
        page: { title: { rendered: '' } },
      },
    };
  }

  const page = pageData[0];

  return {
    props: {
      page,
    },
  };
}


export async function getStaticPaths() {

  const pages  = await getPages();

  const paths = pages
  .filter(({ next_path }) => typeof next_path === 'string' && next_path !== '/')
  .map(({ next_path }) => {
    const segments = next_path.split('/').filter((next_path) => next_path !== '');
    
    return {
      params: {
        slugParent: segments.shift(),
        slugChild: segments,
      },
    };
  });
  
  return {
    paths,
    fallback: 'blocking', // Set to true to handle dynamic paths not defined at build time
  };

}