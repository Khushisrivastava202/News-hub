import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {Navbar} from "./components/Navbar.jsx";
import Home from './Pages/Home.jsx';
import FetchData from './components/FetchData.jsx';
function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/business' element={<FetchData cat="business"/>  }/>
          <Route path='/entertainment' element={<FetchData cat="entertainment"/>  }/>
          <Route path='/health' element={<FetchData cat="health"/>  }/>
          <Route path='/science' element={<FetchData cat="science"/>  }/>
          <Route path='/technology' element={<FetchData cat="technology"/>  }/>
          <Route path='/sports' element={<FetchData cat="sports"/>  }/>

        </Routes>
      </Router>
      
    </>
  )
}

export default App
