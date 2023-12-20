import axios from "axios";
import React, { useEffect, useState } from "react";


const Movie = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      let url =
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1995706620a80431488272f6e5dd4fab&page=";
      try {
        let response = await axios.get(`${url}${count}`);
        console.log(response.data);
        setData(response.data.results);
      } catch (err) {
        console.log("error", err);
      }
    };
    fetchData();
  }, [count]);
  return (
    <div className="container">
      {data &&
        data.map((data, index) => {
          return (
            <div className="movies-container" key={index}>
              <img id="image"
                src={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`}
                alt={data.title}
              />
              <p>Title: {data.title}</p>
              <p>Relase: {data.release_date}</p>
              <p>Overview:{data.overview} </p>
            </div>
          );
        })}
      <button className="btn" onClick={() => setCount(count + 1)}>Fetch Movies</button>
    </div>
  );
};

export default Movie;
