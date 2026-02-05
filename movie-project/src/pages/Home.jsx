import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Terminator", release_date: "1984" },
    { id: 2, title: "Lord of the Ring", release_date: "2001" },
    { id: 3, title: "The Crow", release_date: "1994" },
    { id: 4, title: "Totoro", release_date: "1988" },
    { id: 5, title: "Alien", release_date: "1979" },
  ];

  const handleSearch = (e) => {
    alert("sökt");
    e.preventDefault();
    setSearchQuery("");
  };

  return (
    <div className="home">
      {/*På submit anropas handleSearch funktionen*/}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Sök film"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/*(e) = det som skrivs i input, updaterar setSearchQuery till det nya värdet */}
        <button type="submit" className="search-btn">
          Sök
        </button>
      </form>

      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLocaleLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            ),
        )}
      </div>
    </div>
  );
};
export default Home;
