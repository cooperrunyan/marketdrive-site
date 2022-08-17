import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Institutional } from './components/Institutional/Institutional';
import { Nav } from './components/Nav/Nav';
import { Retail } from './components/Retail/Retail';

export const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <Nav />
        <Header />
        <Institutional />
        <Retail />
      </div>
      <Footer />
    </>
  );
};
