import type { NextPage } from 'next';
import Markdown from 'react-markdown';
import { Footer } from '../components/Footer/Footer';
import { Nav } from '../components/Nav/Nav';

import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export async function getStaticProps() {
  const eula = fs.readFileSync(
    path.join(process.cwd(), `/public/eula.md`),
    'utf8',
  );
  const { content } = matter(eula);
  return {
    props: {
      content,
    },
  };
}

const Home: NextPage<{ content: string }> = ({ content }) => {
  return (
    <>
      <div className="App">
        <Nav />
        <section className="eula">
          <Markdown>{content}</Markdown>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
