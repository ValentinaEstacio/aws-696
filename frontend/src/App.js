import './App.css';
import Navegation from './components/navegation';
import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import Consult from './components/consult';
import RecordActivity from './components/recordActivity';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navegation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/register_page" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/consult" element={<Consult/>}></Route>
          <Route path="/record_activity" element={<RecordActivity/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
