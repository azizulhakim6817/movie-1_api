// import React from "react";

// eslint-disable-next-line react/prop-types
export default function MovieCard({ data }) {
  // eslint-disable-next-line react/prop-types
  const { title, backdrop_path, overview } = data;
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl max-w-6xl m-auto mt-10">
        <figure>
          {backdrop_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
              alt={title}
            />
          ) : (
            <img
              src="https://images.unsplash.com/photo-1707343848655-a196bfe88861?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
              className="h-[224px] w-full object-cover"
              alt={title}
            />
          )}

          <img
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            alt={title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{overview.slice(0, 100)}......</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary ">View Movie</button>
          </div>
        </div>
      </div>
    </>
  );
}
