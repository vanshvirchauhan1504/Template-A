import React, { useState,useContext } from 'react'
import { CardContext } from '../App';

const CreateCard = () => {

    const {createCard} = useContext(CardContext);
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 

        const newCard = {
            title : title,
            content : description
        }
        createCard(newCard)
    }

    return (
    <form onSubmit={handleSubmit} className='h-96 w-96 border-4 border-black inline-block mx-auto flex flex-col align-items-center justify-items-center'>
        <div>Create Card</div>
        <div>
            <div>
                <input type="text" name="Title" onChange={(e)=>setTitle(e.target.value)} id="title" />
            </div>
            <div>
                <textarea name="description" onChange={(e)=>setDescription(e.target.value)} id="desc" cols="30" rows="10"></textarea>
            </div>
        </div>
        <button type='submit' className='bg-green-400 p-2'>Create</button>
    </form>
  )
}

export default CreateCard