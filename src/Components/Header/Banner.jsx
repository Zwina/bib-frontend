import React from 'react'
import { NavLink } from 'react-router-dom'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './banner.css'

function Banner() {
  return (
    <div>


      <Navbar className="nav navbar-dark bg-dark nav-pills nav-fill">
        <Container>
          <ul className="nav navbar-dark bg-dark nav-pills nav-fill">
            <Navbar.Brand>Ma bibliothèque</Navbar.Brand>
            <li className="nav-link">
              <NavLink to="/" exact>Accueil</NavLink>
            </li>
            <li className="nav-link"><NavLink to="/films" exact>Films</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/musiques" exact>Musiques</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/livres" exact>Livres</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/musiques/new" exact>Ajouter Musique</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/films/new" exact>Ajouter Film</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/livres/new" exact>Ajouter Livre</NavLink>
            </li>
          </ul>
        </Container>
      </Navbar>

    </div>
  )
}

export default Banner