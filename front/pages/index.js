import { getPosts, getMenu } from '../utils/wordpress';
import Header from 'components/Header';
import PostCard from 'components/PostCard';
import Layout from 'components/Layout';
import Section from 'components/Section';

export default function Home({ posts, menu }) {

  const LatestPosts = posts.map((post) => {
    return <PostCard
             className="bg-white p-4" 
             post={post}
             key={post.id}
           />;
  });
  

  return (
    <Layout menu={menu}>
      <Header className="bg-slate">
        <h1 className="text-6xl">Tech Blog</h1>
      </Header>
      <Section>
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-4">
          <div className="flex flex-col gap-y-4 md:basis-2/4">
            <h2 className="text-4xl">Blog posts</h2>
            {LatestPosts}
          </div>
          <div className="md:basis-2/4">
            <h2 className="text-4xl">Events</h2>
          </div>
        </div>
      </Section>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  const menu = await getMenu('main');
  
  return {
    props: {
      posts,
      menu,
    },
    revalidate: 10, // In seconds
  };
}