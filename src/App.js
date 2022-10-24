import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import Footer from './components/Footer';
import { Projects } from './data/data';
import { Skills } from './data/data';

function App() {
  return (
    <div className="App" id='Accueil'>
      {/* navbar */}
      <Nav />

      {/* banner */}
      <Banner Projects={Projects}/>

      {/* <div className='test'></div> */}

      {/* rows */}
      <Row title='Projets' Props={Projects} id='Projets' />
      <Row title='Compétences' Props={Skills} id='Compétences' />

      {/* quick view */}

      <Footer />
    </div>
  );
}

export default App;
