import { useState, useEffect } from "react";

export const useAxios = (apiPath,queryterm="") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=b12390bfcba42f87f6b2a7b980aa8566&query=${queryterm}`

    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
      }, [url])

  return { data }
}