import './App.css';
import Home from './Home';
import NavBar from './Nav_bar';
import About from './About';
import Projects from './Projects';


import { useState } from 'react';

function App() {
  const [page, setPage] = useState(<Home />)


  function homeFunction(){
    setPage(<Home />)

  }

  function aboutFunction(){
    setPage(<About />)

  }

  function projectsFunction(){
    setPage(<Projects />)

  }

  return (
    <>
      <NavBar home={homeFunction} about={aboutFunction} projects={projectsFunction}/>
      
      {page}
    </>
  );
}

export default App;
