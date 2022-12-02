import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="d-flex justify-content-start">
        <h1 className="text-center">Bootstrap movie cards</h1>
      </div>
      <div className="d-flex justify-content-end">
        <Link to={"/crear-movies"}>
          <button className="btn btn-primary">Registrar nueva pelicula</button>
        </Link>
      </div>
    </>
  );
}
