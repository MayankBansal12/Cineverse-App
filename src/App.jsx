// App.jsx - Main entry point of the CineVerse App
// This file sets up the application routing and renders the header, footer, and different page components.

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import Detail from "./components/Detail Page/Detail";
import ExplorePage from "./components/Explore Page/ExplorePage";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// Custom hook for fetching API data
import useFetchApi from "./hooks/useFetchApi";

// Redux action to store URLs
import { getUrls } from "./app/homeSlice";


function App() {
  const dispatch = useDispatch();
  const { data } = useFetchApi("/configuration");

  // Fetch configuration data and set the URLs for image paths in the Redux store
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
        <Route path="/:type/:id" element={<Detail />} />
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
