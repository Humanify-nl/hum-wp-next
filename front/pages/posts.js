import { getPosts } from '../utils/wordpress';
import Header from 'components/header';
import PostCard from 'components/PostCard';
import Layout from 'components/Layout';
import Section from 'components/Section';

export default function Home({ posts }) {

  const LatestPosts = posts.map((post) => {
    return <PostCard
             className="bg-white p-4" 
             post={post}
             key={post.id}
           />;
  });

  return (
    <Layout>
      <Header className="bg-slate">
        <h1 className="text-6xl">Tech Blog</h1>
      </Header>
      <Section>
        <div className="flex">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-4xl">Blog posts</h2>
            {LatestPosts}
          </div>
        </div>
      </Section>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  
  return {
    props: {
      posts,
    },
    revalidate: 10, // In seconds
  };
}