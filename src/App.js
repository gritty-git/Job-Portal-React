import './App.css';

import Header from './components/Header';
import FAQs from "./pages/FAQs"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import { Route, Routes } from "react-router-dom"
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search/:searchterm" element={<SearchPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
