import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Sidebar from './Components/sidebar';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle]= useState(false);

  const Opensidebar = () =>{
    setOpenSidebarToggle(!openSidebarToggle);
  }
  return (
    <div className="grid-container">
      <Header Opensidebar={Opensidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} Opensidebar={Opensidebar}/>
      <Home/>
    </div>
  );
}

export default App;
