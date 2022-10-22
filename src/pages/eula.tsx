import type { NextPage } from 'next';
import { Eula } from '../components/Eula/Eula';
import { Footer } from '../components/Footer/Footer';
import { Nav } from '../components/Nav/Nav';

const Home: NextPage = () => {
  return (
    <>
      <div className="App">
        <Nav />
        <Eula />
      </div>
      <Footer />
    </>
  );
};

export default Home;
