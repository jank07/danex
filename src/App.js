import './App.css';
import About from './components/About';
import Main from './components/Main'
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main />}>
        </Route>
        <Route path="/onas" element={<About />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
