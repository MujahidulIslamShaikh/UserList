import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar';
import Context from './Context/Context.jsx';

function App() {
  return (
    <div className="App">
      <Context>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Context>
    </div>
  );
}

export default App;
