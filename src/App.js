import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
// import styled from '@emotion/'
import parenthelper from './Images/parent-helper-home.png'
import museumquiz from './Images/83836CB2-1AC3-4795-9335-612D2BB89D36_1_105_c.jpeg'
import sethap from './Images/EE5E7FF8-33DE-4E41-B950-D63CDF317B84_1_105_c.jpeg'
import ReactTooltip from 'react-tooltip'
import './App.css';

// const Background = styled.div({
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
//   color: "#FFF",
//   position: "relative",
//   width: "500px",
//   height: "350px",
//   cursor: "pointer",
//   backgroundImage: {parenthelper},
// });

function App() {
  return (
    <div className="App">
      <ReactTooltip />
      <Nav />
      <main>
        <section>
          <h2 className='section-title'>About</h2>
          <p className='section-content'>I am a full stack software developer with over seven years of sales experience which allows me to convey technical details into more easily digestible concepts.  Because of my positive attitude and adaptability, I excel at working in a team and empower my colleagues by amplifying their strengths.  I also prioritize the big picture to complete projects on time while still meeting deliverables.</p>< br/>
          <p className='section-content'>I live in Brooklyn, NY with my wife, two year old daughter and standard poodle.</p>
        </section>
        {/* <Background /> */}

        <h2 className='project-links'><a href='https://parent-helper-17830.herokuapp.com/' rel="noopener noreferrer" target='_blank'>Parent Helper</a></h2>
        {/* <div className='thumbnail'> */}

        <a href='https://parent-helper-17830.herokuapp.com/' rel="noopener noreferrer" target='_blank'><img className='thumbnail' src={parenthelper} alt='' /></a>
        {/* <div className='overlay'> */}
          {/* <div className='text'>Hello World</div> */}
        {/* </div> */}
        {/* </div> */}
        <h2 className='project-links'><a href='http://museum-quiz.surge.sh/' rel="noopener noreferrer" target='_blank'>Museum Quiz</a></h2>
        <a href='http://museum-quiz.surge.sh/' rel="noopener noreferrer" target='_blank'><img className='thumbnail' src={museumquiz} alt='' /></a>
        <h2 className='project-links'><a href='http://sethap.surge.sh/' rel="noopener noreferrer" target='_blank'>SetHap</a></h2>
        <a href='http://sethap.surge.sh/' rel="noopener noreferrer" target='_blank'><img className='thumbnail' src={sethap} alt='' /></a>
        <section>
          <h2 className='section-title'>Skills</h2>
          <div className='section-content'>
            <i class="devicon-css3-plain colored icon" data-tip='CSS' data-effect='solid'></i>
            <i class="devicon-express-original colored icon" data-tip='Express.js' data-effect='solid'></i>
            <i class="devicon-git-plain colored icon" data-tip='git' data-effect='solid'></i>
            <i class="devicon-javascript-plain colored icon" data-tip='JavaScript' data-effect='solid'></i>
            <i class="devicon-nodejs-plain colored icon" data-tip='Node.js' data-effect='solid'></i>
            <i class="devicon-postgresql-plain colored icon" data-tip='PostgresQL' data-effect='solid'></i>
            <i class="devicon-rails-plain colored icon" data-tip='Rails' data-effect='solid'></i>
            <i class="devicon-react-original colored icon" data-tip='React.js' data-effect='solid'></i>
            <i class="devicon-html5-plain colored icon" data-tip='HTML5' data-effect='solid'></i>
            <i class="devicon-ruby-plain colored icon" data-tip='Ruby' data-effect='solid'></i>
            <i class="devicon-sequelize-plain colored icon" data-tip='Sequelize' data-effect='solid'></i>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
