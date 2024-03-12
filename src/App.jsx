import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Video from "./pages/video/Video";
import { useState } from "react";
import Search from "./pages/search/Search";

function App() {
  const [sidebar, setSidebar] = useState(true);
  const [query, setQuery] = useState("");

  return (
    <div>
      <Navbar setSidebar={setSidebar} setQuery={setQuery} query={query} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
        <Route path="/search" element={<Search query={query} />} />
      </Routes>
    </div>
  );
}

export default App;
