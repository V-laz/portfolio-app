import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Price from './components/Main/Price/Price';
import Portfolio from './components/Main/Portfolio/Portfolio';
import Video from './components/Main/Video/Video';
import Contact from './components/Main/Contact/Contact';
import Profile from './components/Main/Profile/Profile';
import Skills from './components/Main/Skills/Skills';


const App = (props) => {


  return (
    <main className="mainContent">
      <Header />
      <Profile />
      <Skills />
      <Portfolio state={props.store.state} />
      <Video state={props.store.state} />
      <Price />
      <Contact />
    </main>
  );
}
export default App;
