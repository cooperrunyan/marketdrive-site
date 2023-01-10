import type { NextPage } from 'next';
import Markdown from 'react-markdown';
import { Footer } from '../components/Footer/Footer';
import { Nav } from '../components/Nav/Nav';

import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  return {
    props: {
      content: fs.readFileSync(
        path.join(process.cwd(), `/public/eula.md`),
        'utf8',
      ),
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
