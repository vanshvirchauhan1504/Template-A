import React, {useContext} from 'react'
import Card from './Card'
import { CardContext } from '../App';

const CardBox = () => {
    const {cards} = useContext(CardContext);
    // console.log(cards)
    return (
    <>
    <div className='m-4 p-4 border-4 border-black box-border flex flex-wrap'>
        {
            cards.map((card)=>{
                return <Card key={card.id} id={card.id} title={card.title} content={card.content}></Card>
            })
        }
    </div>
    </>
  )
}

export default CardBox