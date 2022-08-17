import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Institutional } from './components/Institutional/Institutional';
import { Nav } from './components/Nav/Nav';
import { Retail } from './components/Retail/Retail';
import { Schedule } from './components/Schedule/Schedule';

export const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <Nav />
        <Header />
        <Institutional />
        <Retail />
        <Schedule />
      </div>
      <Footer />
    </>
  );
};
