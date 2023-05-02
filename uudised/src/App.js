import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contacts from "./pages/Contacts";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <h1>Minu blogi</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="Contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
