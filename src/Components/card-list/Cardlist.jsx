import React from 'react'
import Carditem from '../card-item/Carditem'
import './Cardlist.css'


const Cardlist = (props) => {
  return (
    <div className='card-list'>
        {props.oeuvres.map(oeuvreItem => (
            <Carditem key={oeuvreItem.id} oeuvre={oeuvreItem} />
        )
        
        )

        }

    </div>
  )
}

export default Cardlist