import React, { useState, useEffect } from 'react';

import Cardlist from '../Components/card-list/Cardlist';
import SearchBox from '../Components/search-box/SearchBox';

import 'bootstrap/dist/css/bootstrap.min.css';


/*let MUSIQUES = [
    {
        id : "1",
        auteur : "Daft Punk",
        annee : "2013",
        titre : "Get lucky",
        imageUrl : "https://m.media-amazon.com/images/I/61cjEm5meDL._SL1500_.jpg",
        detail : "https://www.youtube.com/watch?v=5NV6Rdv1a3I"
    },
    {
        id : "2",
        auteur : "R.E.M.",
        annee : "1991",
        titre : "Losing my religion",
        imageUrl : "https://www.christianismeaujourdhui.info/wp-content/uploads/sites/3/2022/08/REM_Losing-my-Religion_image-971x0-c-default.jpg"

    },
    {
        id : "3",
        auteur : "The Cramberries",
        annee : "1994",
        titre : "Zombie",
        imageUrl : "https://m.media-amazon.com/images/I/51wZc27VVOL._SX355_.jpg"

    },
    {
      id : "4",
      auteur : "Daft Punk",
      annee : "2013",
      titre : "Get lucky",
      imageUrl : "https://m.media-amazon.com/images/I/61cjEm5meDL._SL1500_.jpg"
    },
    {
      id : "5",
      auteur : "Daft Punk",
      annee : "2013",
      titre : "Get lucky",
      imageUrl : "https://m.media-amazon.com/images/I/61cjEm5meDL._SL1500_.jpg"
    },
    {
      id : "6",
      auteur : "Daft Punk",
      annee : "2013",
      titre : "Get lucky",
      imageUrl : "https://m.media-amazon.com/images/I/61cjEm5meDL._SL1500_.jpg"
    },
    {
      id : "7",
      auteur : "Daft Punk",
      annee : "2013",
      titre : "Get lucky",
      imageUrl : "https://m.media-amazon.com/images/I/61cjEm5meDL._SL1500_.jpg"
    },
    {
      id : "8",
      auteur : "Daft Punk",
      annee : "2013",
      titre : "Get lucky",
      imageUrl : "https://m.media-amazon.com/images/I/61cjEm5meDL._SL1500_.jpg"
    }

]*/


const Musiques = () => {

  const [musiques, setMusiques] = useState([])
  const [searchField, setSearchField] = useState('')
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/musiques', {
      method: "GET",
      headers:{
        'Content-Type' : 'application/json'
      }
    }).then(res => {
      if (res.status !== 200 && res.status !== 201){
        throw new Error('Erreur lors de la récupération de la musique')
      }
      return res.json()
    }).then(res => {
      setMusiques(res.musiques)
    }).catch(error => {
      console.log(error)
      setError(error.message)
    })
  }, [])

  const OnParentSearchChange = event => {
    // alert ('');
    //console.log(event.target.value);
    setSearchField(event.target.value);
  }

  //const filteredMusiques = MUSIQUES.filter((musique) => 
  const filteredMusiques = musiques.filter((musique) => 
    musique.titre.toLowerCase().includes(searchField.toLowerCase())
  );
  
  

  return (
    <div className="container-fluid">
        <div className='row'>
          <SearchBox onChildSearchChange={OnParentSearchChange}/>
          <Cardlist oeuvres={filteredMusiques}/>
        </div>
    </div>
  )
}

export default Musiques