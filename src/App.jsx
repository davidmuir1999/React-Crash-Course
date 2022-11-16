import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Nav from "./components/nav.jsx"
import Users from './Pages/Users';

function App() {


  return (
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/username/:name' element={<Users/>}/>
        </Routes>
      </Router>
  );
}

export default App;
