import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

//components
import Footer from './component/footer';
import Slider from './component/slider';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Jobs from './pages/Jobs';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Slider />
        <nav>
          <h1>JobSite</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
