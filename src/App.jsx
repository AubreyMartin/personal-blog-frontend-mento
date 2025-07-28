import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Blog from "./pages/Blog";
import Newsletter from "./pages/Newsletter";
import About from "./pages/about";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/article/:slug" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
