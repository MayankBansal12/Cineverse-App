import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import NotFound from "./components/NotFound/NotFound";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import ExplorePage from "./components/Explore Page/ExplorePage";
import About from "./components/About/About";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import useFetch from "./hooks/useFetchApi";
import { getUrls } from "./app/homeSlice";

function App() {
  const dispatch = useDispatch();
  const { data } = useFetch("/configuration");

  useEffect(() => {
    if (data) {
      const url = {
        backdrop: data.images.secure_base_url + "original",
        poster: data.images.secure_base_url + "original",
        profile: data.images.secure_base_url + "original",
      };
      dispatch(getUrls(url));
    }
  }, [data]);


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
