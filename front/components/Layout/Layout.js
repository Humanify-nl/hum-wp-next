import Head from 'next/head';
import Nav from 'components/Nav';
import Footer from 'components/Footer';

export const siteTitle = 'Next.js Sample Website';

const Layout = ({ children, menu }) => {

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>      
      <Nav menu={menu}></Nav>
      <main className="bg-gray-100">
        {children}
        <Footer className="bg-slate-800 text-white">
          WordPress headless with Next.js
        </Footer>
      </main>
    </>
  );
}

export default Layout;