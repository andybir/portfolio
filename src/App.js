import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import parenthelper from './Images/CCC5E6F9-A088-4C76-A2BB-5E078130BC7E.jpeg'
import museumquiz from './Images/83836CB2-1AC3-4795-9335-612D2BB89D36_1_105_c.jpeg'
import sethap from './Images/EE5E7FF8-33DE-4E41-B950-D63CDF317B84_1_105_c.jpeg'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
      <main>
        <h2><a href='https://shrouded-castle-17830.herokuapp.com/' rel="noopener noreferrer" target='_blank'>Parent Helper</a></h2>
        <img className='thumbnail' src={parenthelper} alt='' />
        <h2><a href='http://museum-quiz.surge.sh/' rel="noopener noreferrer" target='_blank'>Museum Quiz</a></h2>
        <img className='thumbnail' src={museumquiz} alt='' />
        <h2><a href='http://sethap.surge.sh/' rel="noopener noreferrer" target='_blank'>SetHap</a></h2>
        <img className='thumbnail' src={sethap} alt='' />
      </main>
      <Footer />
    </div>
  );
}

export default App;
