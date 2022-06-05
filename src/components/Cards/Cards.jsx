import React from 'react'
import Card from '../card/Card'
import '../Cards/Cards.css'
import { CardsData } from '../Data/Data'


const Cards = () => {
  return (
    <div className='cards'>
        {/* mapping */}

        {CardsData.map((card, id) => {
            return (
                <div className='main-container'>
                        <Card 
                            title={card.title}
                            color={card.color}
                            barValue={card.barValue}
                            value={card.value}
                            png={card.png}
                            series={card.series}
                        />

                </div>
            )
        })}
    </div>
  )
}

export default Cards