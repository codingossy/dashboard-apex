import React from 'react'
import Sidebar from './components/Sidebar';
import './App.css'
import DashboardInner from './components/DashboardInner';
import Right from './components/Right/Right';

function App() {
  return (
    <div className='App'>

        <div className='AppGlass'>
          <Sidebar />
          <DashboardInner />
          <Right />

        </div>
        
      
    </div>
  );
}

export default App;
