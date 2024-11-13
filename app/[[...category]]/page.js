import React from "react";
import HomeContainer from "@/containers/home";

import Movies from "@/mocks/movies.json";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function HomePage({ params }) {
  await delay(1000)
  
  let selectedCategory;
  if (params.category?.length > 0) {
    selectedCategory = true;
  }

  let movieN = [];
  if (selectedCategory) {
    movieN = Movies.results.filter((movie) =>
      movie.genre_ids.find((g_id) => g_id == params.category?.[0])
    );
  }

  return (
    <HomeContainer
      selectedCategory={{
        id: params.category?.[0] ?? "", // params.category?.[0] ? params.category?.[0] : "",
        movies: movieN, // Movies.results.slice(0, 7)
      }}
    />
  );
}

export default HomePage;
