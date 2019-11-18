import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2><a href='https://shrouded-castle-17830.herokuapp.com/' rel="noopener noreferrer" target='_blank'>Parent Helper</a></h2>
        <h2><a href='http://museum-quiz.surge.sh/' rel="noopener noreferrer" target='_blank'>Museum Quiz</a></h2>
        <h2><a href='http://sethap.surge.sh/' rel="noopener noreferrer" target='_blank'>SetHap</a></h2>
      </main>
      <Footer />
    </div>
  );
}

export default App;
