import React from 'react'
import {Card} from '../CardComponent/Card'
import './card-list.styles.css'
export const CardList=(props)=>(
  <div className='card-list'>
  {
    props.monster.map(monster=>(
      <Card key={monster.id} monster={monster}/>         
    ))
  }
</div>
)
  
   
