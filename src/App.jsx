import Header from './components/Header';
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Concacts from './components/Concact'
import './App.css'
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState('light');

  return (
    <main className='p-6 dark:bg-slate-800 dark:text-white' >
      <Header theme={theme} setTheme={setTheme}/>
      <Home/>
      <AboutMe/>
      <Projects/>
      <Concacts/>
      <Footer/>
    </main>
      
  )
}

export default App
