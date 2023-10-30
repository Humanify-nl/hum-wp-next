import { getPage, getPost, getPosts, getSlugs, getMenu } from '../utils/wordpress';
import Header from 'components/Header';
import Layout from 'components/Layout';
import PostImage from 'components/PostImage';
import FlexibleContent from 'components/FlexibleContent';

export default function Page( {page, menu, posts} ) {

  let post = page;

  return (
    <Layout menu={menu}>
      <Header>
        {post?.featured_img_url && (
          <PostImage
            src={post.featured_img_url}
            alt="Picture"
            className="aspect-4/3 rounded"
            priority={true}
          />
        )}
        <h1 className="text-h1">{post?.title.rendered}</h1>
      </Header>
      <FlexibleContent post={post} posts={posts}/>
    </Layout>
  );
}

export async function getStaticProps({ params = {} }) {
  const { slug } = params;
  const menu = await getMenu('main');

  const lastSlugOnly = slug[slug.length - 1];
  const pageData = await getPage(lastSlugOnly);
  const postData = await getPost(lastSlugOnly);
  const posts = await getPosts();

  const page = pageData ?? postData;

  return {
    props: {
      page,
      menu,
      posts
    },
  };
}


export async function getStaticPaths() {

  const getPages  = await getSlugs('pages');
  const getPosts  = await getSlugs('posts');

  const paths = [...getPages, ...getPosts];

  return {
    paths,
    fallback: 'blocking', // Set to true to handle dynamic paths not defined at build time
  };

}