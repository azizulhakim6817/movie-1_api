// import React from "react";

import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

//API_key + URL
const API_KEY = `&api_key=0d20bcfedffb3eda1de1115cb36e1626`;
const API_URL = `https://api.themoviedb.org/3/search/movie?query=batman&include_adult=false&language=en-US&page=1`;

export default function Home() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    console.log(API_URL);
    const response = await fetch(API_URL + API_KEY);
    // console.log(res);
    const data = await response.json();
    // console.log(data);
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  //way nunber -1

  //   if (movies.length) {
  //     return (
  //       <>
  //         <div className="text-3xl">{movies.length} Found</div>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <h2 className="text-3xl">Loading....</h2>
  //       </div>
  //     );
  //   }

  //way nunber -2
  //   return <>{movies.length > 0 && <div>{movies.length} Movies Found</div>}</>;

  // way Number 3
  //   return <>{movies.length > 0 ? <MovieCard /> : <h2>Loading</h2>}</>;

  // way Number 4
  //   return (
  //     <>
  //       <h2> Testing Running </h2>
  //       {movies.map((movies) => (
  //         <MovieCard key={movies} />
  //       ))}
  //     </>
  //   );

  // Final way
  return (
    <>
      <div className=" grid grid-cols-3 gap-10 mx-10 lg:grid-cols-3 sm:grid-cols-2">
        {movies.map((data) => (
          <MovieCard key={data} data={data} />
        ))}
      </div>
    </>
  );
}

//TODO 1 -> API_key + Create Link
// TODO 2 -> Fetch Data
// TODO 3  -> Show Data
// TODO 4 -> Mack Search
