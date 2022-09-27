import Footer from '../components/Footer';
import Header from '../components/Header';
import PropertyList from '../components/PropertyList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/>
       <PropertyList/>
       <Footer/>
      </header>
    </div>
  );
}

export default App;
