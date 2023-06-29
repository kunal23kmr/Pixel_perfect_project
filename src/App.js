import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostList from './Components/PostList';
import Home from './Pages/Home';
import Speaker from './Pages/Speaker';
import Committee from './Pages/Committee';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import NavBar from './Components/NavBar';

const p = "Pixel_perfect_project"
function App() {
  return (
    <div className='container'>
      <BrowserRouter>

        <NavBar />

        <Routes>
          {/* home page */}
          <Route path="/" element={<Home />} />

          {/* Speaker page */}
          <Route path="/speaker" element={<Speaker />} />

          {/* Committee page */}
          <Route path="/committee" element={<Committee />} />


          {/* Contact page */}
          <Route path="/contact" element={<Contact />} />

          {/* Error page */}
          <Route path="*" element={<Error />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
