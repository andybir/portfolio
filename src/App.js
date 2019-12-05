import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import parenthelper from './Images/CCC5E6F9-A088-4C76-A2BB-5E078130BC7E.jpeg'
import museumquiz from './Images/83836CB2-1AC3-4795-9335-612D2BB89D36_1_105_c.jpeg'
import sethap from './Images/EE5E7FF8-33DE-4E41-B950-D63CDF317B84_1_105_c.jpeg'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#bbdefb',
    },  
    secondary: {
      main: '#f44336',
    },
  },
});

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider> */}
      <main>
        <section>
          <h2 className='section-title'>About</h2>
          <p className='section-content'>I am a full stack software developer with over seven years of sales experience which allows me to convey technical details into more easily digestible concepts.  Because of my positive attitude and adaptability, I excel working in a team and empower my colleagues by amplifying their strengths.  I also prioritize the big picture to complete projects on time while still meeting deliverables.</p>
        </section>
        <h2 className='project-links'><a href='https://parent-helper-17830.herokuapp.com/' rel="noopener noreferrer" target='_blank'>Parent Helper</a></h2>
        <a href='https://shrouded-castle-17830.herokuapp.com/' rel="noopener noreferrer" target='_blank'><img className='thumbnail' src={parenthelper} alt='' /></a>
        <h2 className='project-links'><a href='http://museum-quiz.surge.sh/' rel="noopener noreferrer" target='_blank'>Museum Quiz</a></h2>
        <a href='http://museum-quiz.surge.sh/' rel="noopener noreferrer" target='_blank'><img className='thumbnail' src={museumquiz} alt='' /></a>
        <h2 className='project-links'><a href='http://sethap.surge.sh/' rel="noopener noreferrer" target='_blank'>SetHap</a></h2>
        <a href='http://sethap.surge.sh/' rel="noopener noreferrer" target='_blank'><img className='thumbnail' src={sethap} alt='' /></a>
        <section>
          <h2 className='section-title'>Skills</h2>
          <p className='section-content'>React, JavaScript, Express, Ruby, Rails, Node.js, CSS, HTML, SQL, PostgreSQL</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
