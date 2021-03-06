import React from 'react';
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import parenthelper from './Images/PH2_0.png'
import museumquiz from './Images/83836CB2-1AC3-4795-9335-612D2BB89D36_1_105_c.jpeg'
import sethap from './Images/EE5E7FF8-33DE-4E41-B950-D63CDF317B84_1_105_c.jpeg'
import birdielou from './Images/birdie-lou.png'
import yemsg from './Images/yemsg-2019.jpeg'
import ReactTooltip from 'react-tooltip'
import './App.css';

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
        
        <h2 className='project-links'><a href='https://birdie-lou.herokuapp.com/' rel="noopener noreferrer" target='_blank'>Birdie Lou (prototype)</a></h2>
        <p className='caption'>Ecommerce website built with Django</p>
        <a href='https://birdie-lou.herokuapp.com/' rel="noopener noreferrer" target='_blank'><img className='thumbnail' src={birdielou} alt='' data-tip='Ecommerce website built with Django' /></a>
        
        <h2 className='project-links'><a href='https://parent-helper-17830.herokuapp.com/' rel="noopener noreferrer" target='_blank'>Parent Helper</a></h2>
        <p className='caption'>Version 2.0 built with Django</p>
        <a href='https://parent-helper-63190.herokuapp.com/account/' rel="noopener noreferrer" target='_blank'><img className='thumbnail' src={parenthelper} alt='' data-tip='A forum for parents to ask questions and post topics relating to their kids' /></a>

        <h2 className='project-links'><a href='http://museum-quiz.surge.sh/' rel="noopener noreferrer" target='_blank'>Museum Quiz</a></h2>
        <a href='http://museum-quiz.surge.sh/' rel="noopener noreferrer" target='_blank'><img className='thumbnail' src={museumquiz} alt='' data-tip='A site designed to help people learn about artifacts from different cultures.  Based on the Harvard Museum API' /></a>
        
        <h2 className='project-links'><a href='http://sethap.surge.sh/' rel="noopener noreferrer" target='_blank'>SetHap</a></h2>
        <a href='http://sethap.surge.sh/' rel="noopener noreferrer" target='_blank'><img className='thumbnail' src={sethap} alt='' data-tip='Lookup your favorite band and to see their most recent live concert set list and also a news story about an occurence that same day.  Based on the setlist.fm and NY Times APIs.' /></a>
          <h2 className='section-title'>Skills</h2>
          <div className='icon-section-content'>
            <i className="devicon-django-plain colored icon" data-tip='Django' data-effect='solid'></i>
            <i className="devicon-css3-plain colored icon" data-tip='CSS' data-effect='solid'></i>
            <i className="devicon-express-original colored icon" data-tip='Express.js' data-effect='solid'></i>
            <i className="devicon-python-plain colored icon" data-tip='Python' data-effect='solid'></i>
            <i className="devicon-git-plain colored icon" data-tip='git' data-effect='solid'></i>
            <i className="devicon-javascript-plain colored icon" data-tip='JavaScript' data-effect='solid'></i>
            <i className="devicon-nodejs-plain colored icon" data-tip='Node.js' data-effect='solid'></i>
            <i className="devicon-postgresql-plain colored icon" data-tip='PostgresQL' data-effect='solid'></i>
            <i className="devicon-rails-plain colored icon" data-tip='Rails' data-effect='solid'></i>
            <i className="devicon-react-original colored icon" data-tip='React.js' data-effect='solid'></i>
            <i className="devicon-html5-plain colored icon" data-tip='HTML5' data-effect='solid'></i>
            <i className="devicon-ruby-plain colored icon" data-tip='Ruby' data-effect='solid'></i>
            {/*<i class="devicon-sequelize-plain colored icon" data-tip='Sequelize' data-effect='solid'></i>*/}
          </div>

        {/*<h2 className='project-links'>Photos</h2>
        <a href='https://parent-helper-17830.herokuapp.com/' rel="noopener noreferrer" target='_blank'><img className='thumbnail' src={yemsg} alt='' data-tip="Phish, Madison Square Garden, New Year's Eve 2019" /></a>*/}

      </main>
      <Footer />
    </div>
  );
}

export default App;
