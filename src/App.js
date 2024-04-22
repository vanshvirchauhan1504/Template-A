import { useState,createContext } from 'react';
import './App.css';
import CardBox from './components/CardBox';
import CreateCard from './components/CreateCard';

export const CardContext = createContext();

function App() {
  const [cards,setCards] = useState([
    {
        id : 1,
        title : "CARD 1",
        content : "Lorem ipsum, dolor at minima! Atque repudiandae qui amet quisquam harum rem saepe eum dolorum quia, corrupti minima dolore sequi ab."
    },
    {
        id : 2,
        title : "CARD 2",
        content : "Lorem ipsum, dolor at minima! Atque repudiandae qui amet quisquam harum rem saepe eum dolorum quia, corrupti minima dolore sequi ab."
    },
    {
        id : 3,
        title : "CARD 3",
        content : "Lorem ipsum, dolor at minima! Atque repudiandae qui amet quisquam harum rem saepe eum dolorum quia, corrupti minima dolore sequi ab."
    },
    {
        id : 4,
        title : "CARD 4",
        content : "Lorem ipsum, dolor at minima! Atque repudiandae qui amet quisquam harum rem saepe eum dolorum quia, corrupti minima dolore sequi ab."
        
    },
    {
        id : 5,
  
        title : "CARD 5",
        content : "Lorem ipsum, dolor at minima! Atque repudiandae qui amet quisquam harum rem saepe eum dolorum quia, corrupti minima dolore sequi ab."
    },
    {
        id : 6,
        title : "CARD 6",
        content : "Lorem ipsum, dolor at minima! Atque repudiandae qui amet quisquam harum rem saepe eum dolorum quia, corrupti minima dolore sequi ab."
    },
    {
        id : 7,
        title : "CARD 7",
        content : "Lorem ipsum, dolor at minima! Atque repudiandae qui amet quisquam harum rem saepe eum dolorum quia, corrupti minima dolore sequi ab."
    },
    {
        id : 8,
        title : "CARD 8",
        content : "Lorem ipsum, dolor at minima! Atque repudiandae qui amet quisquam harum rem saepe eum dolorum quia, corrupti minima dolore sequi ab."
    },
    {
        id : 9,
        title : "CARD 9",
        content : "Lorem ipsum, dolor at minima! Atque repudiandae qui amet quisquam harum rem saepe eum dolorum quia, corrupti minima dolore sequi ab."
    },
  ]);

  const deleteCard = (id) =>(
    setCards(cards.filter((card)=>card.id!==id))
  )

  const createCard = (newCard) => {
    const newId = Math.max(...cards.map((card) => card.id)) + 1;
    newCard.id = newId
    setCards([...cards,newCard])
  }

  const editCard = (editedCard) => {
    console.log(editedCard)
    console.log(cards)
    setCards(cards.map((card)=>{
      if(card.id===editedCard.id)
        return editedCard
      else 
        return card
    }))
  }

  return (
    <CardContext.Provider value={{cards,createCard,deleteCard,editCard}}>
    <div className="border-4 border-blue">
        <CardBox/>
        <CreateCard/>
    </div>
    </CardContext.Provider>
  );
}

export default App;
