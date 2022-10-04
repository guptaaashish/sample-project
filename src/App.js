
import Navbar from "./components/layouts/navbar";
import ComingSoon from "./components/coming-soon";
import HomePage from "./components/home-page";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from "./components/layouts/footer"

export default function App() {
  return (
    <div className="bg-sky px-4 font-plus">
      <Navbar />
      <div className="wrapper">
        <Routes>
          <Route path='/' exact element={<HomePage/>} />
          <Route path='/menu' exact element={<ComingSoon />} />
          <Route path='/call' exact element={<ComingSoon />} />
          <Route path='/admin' exact element={<ComingSoon />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}
