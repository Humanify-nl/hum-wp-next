import Layout from 'components/Layout';
import Header from 'components/Header';
import Img from 'components/Img';
import Section from 'components/Section';
import Link from 'next/link';
import FlexibleContent from 'components/FlexibleContent';

import { getPost, getSlugs } from '../../utils/wordpress';

export default function PostPage({ post }) {

  return (
    <Layout>
      <Header>
        <Img
          src={ post.featured_img_url }
          alt="Picture"
          className="basis-3/12 flex"
          classNameImg="aspect-4/3 rounded"
        />
        <h1 className="text-4xl">{post.title.rendered}</h1>
      </Header>
      <FlexibleContent post={post}/>
      <Section>
        <h2 className="text-2xl">ACF field test:</h2>
        <p>{post.acf.text_field}</p>
        <p>ACF image field:</p>
        <Img
          src={ post.acf.image_field.url }
          alt="Picture"
          classNameImg="aspect-4/3 rounded"
        />
        <p>ACF link field:</p>
        <Link
          className="underline hover:no-underline"
          href={ post.acf.link_field.url }
          target={ post.acf.link_field.target }
        > { post.acf.link_field.title}
        </Link>        
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        ></div>
        <Link href="/" className="underline hover:no-underline">
          Back to Home
        </Link>
      </Section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getSlugs('posts');

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new blogpost is added to the app
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 10, // In seconds
  };
}