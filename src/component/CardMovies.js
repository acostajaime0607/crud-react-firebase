import React from "react";
import { Link } from "react-router-dom";

export default function CardMovies({ data, deleteMovies }) {
  return (
    <div className="card movie_card">
      <img
        src="https://picsum.photos/200/300?random=1"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <Link to={`/editar-movies/${data.id}`}>
          <button
            type="button"
            className="btn btn-warning btn-circle button_1 btn-xl"
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
        </Link>

        <button
          type="button"
          className="btn btn-danger btn-circle button_2 btn-xl"
          onClick={() => deleteMovies(data.id)}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
        <h5 className="card-title">{data.titulo}</h5>
        <span className="movie_info">2019</span>
        <span className="movie_info float-right">
          <i className="fas fa-star"></i> 9 / 10
        </span>
      </div>
    </div>
  );
}
