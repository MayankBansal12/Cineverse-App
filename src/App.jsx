import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Search from "./components/Search/Search";
import ExplorePage from "./components/Explore Page/ExplorePage";
import About from "./components/About/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type/:id" element={<MovieDetails />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/explore/:type" element={<ExplorePage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
