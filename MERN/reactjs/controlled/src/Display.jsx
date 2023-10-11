import React from 'react';

const Display = ({movies}) => {
    return (
        <div className="container">
            {
                movies.map(
                    (movie, index) => {
                        return <Box key={index} img={movie.poster_path} name={movie.title} />
                    }
                )
            }
        </div>
    );
}

export default Display;


const Box = ({ name, img }) => {
    return <div className="box">
      <img src={"https://image.tmdb.org/t/p/w1280/" + img} alt="" width="100%" height="200px" />
      <h4>{name}</h4>
    </div>
  }