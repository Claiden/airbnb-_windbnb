import Footer from '../components/Footer';
import Header from '../components/Header';
import Property from '../components/Property';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/>
       <Property/>
       <Footer/>
      </header>
    </div>
  );
}

export default App;
