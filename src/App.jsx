import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Musiques from './pages/Musiques'
import Film from './pages/Film'
import Livres from './pages/Livres'
import Details from './Components/Details/Details'
import Banner from './Components/Header/Banner'
import Accueil from './pages/Accueil'
import NewItem from './pages/NewItem'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import UpdateItem from './pages/Update'


function App() {

  return (
    <div className="App">

      <Router>
      
      <Banner />


      <Route path="/" exact>
          <h1 className="title">Accueil</h1>
          <Accueil />
        </Route>


        <Route path="/musiques" exact>
          <h1 className="title">Musiques</h1>
          <Musiques />
        </Route>

        <Route path="/films" exact>
          <h1 className="title">Films</h1>
          <Film />
        </Route>

        <Route path="/livres" exact>
          <h1 className="title">Livres</h1>
          <Livres />
        </Route>

        <Route path="/musiques/new" exact>
        <h1 className="title">Nouvel objet</h1>
        <NewItem route="musiques"/>
        </Route>

        <Route path="/films/new" exact>
        <h1 className="title">Nouvel objet</h1>
        <NewItem route="films"/>
        </Route>

        <Route path="/livres/new" exact>
        <h1 className="title">Nouvel objet</h1>
        <NewItem route="livres"/>
        </Route>

        <Route path="/update" exact>
        <h1 className="title">Update</h1>
        <UpdateItem/>
        </Route>

      </Router>


    </div>

  )
}

export default App
