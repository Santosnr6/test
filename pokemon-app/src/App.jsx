import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import PokedexPage from './pages/pokedexPage/PokedexPage';
import TeamGeneratorPage from './pages/teamGeneratorPage/TeamGeneratorPage';

function App() {
  
  return (
    <div className="app">
      <Header />
      {/* <PokedexPage /> */}
      <TeamGeneratorPage />
      <Footer />
    </div>
  )
}

export default App
