import React,{useContext, useState} from 'react'
import { CardContext } from '../App'

const Card = ({id,title,content}) => {

    const [editForm,setEditForm] = useState(false);

    const {deleteCard,editCard} = useContext(CardContext)
    const [editTitle,setEditTitle] = useState(title);
    const [editDescription,setEditDescription] = useState(content);

    const handleSubmit = (e) => {
        e.preventDefault(); 

        const editedCard = {
            id:id,
            title : editTitle,
            content : editDescription
        }
        editCard(editedCard)
        setEditForm(false)
    }


    const handleDelete = () => (
        deleteCard(id)
    )

    const handleEdit = () => (
        setEditForm(true)
    )

    return (
    <>
    <div className='w-full lg:w-3/12 md:w-6/12 border-4 border-red-100 border-solid p-2'>
        <div>
            <h1>{title}</h1>
        </div>

        <div>
            <h2>{content}</h2>
        </div>

        <button 
            className='w-full bg-blue-400 p-2 mt-1'
            onClick={handleEdit}
        >
                Edit
        </button>

        <button 
            className='w-full bg-red-400 p-2 mt-1'
            onClick={handleDelete}
        >
                Delete
        </button>

    </div>

    {
        editForm? <form onSubmit={handleSubmit} className='h-96 w-96 border-4 border-black inline-block mx-auto flex flex-col align-items-center justify-items-center'>
        <div>Edit Card</div>
        <div>
            <div>
                <input type="text" value={editTitle} name="Title" onChange={(e)=>setEditTitle(e.target.value)} id="title" />
            </div>
            <div>
                <textarea value={editDescription} name="description" onChange={(e)=>setEditDescription(e.target.value)} id="desc" cols="30" rows="10"></textarea>
            </div>
        </div>
        <button type='submit' className='bg-green-400 p-2'>Save</button>
        <button onClick={()=>setEditForm(false)} className='bg-red-400 p-2'>Close</button>

       </form>:
       <></>
    }
    </>

  )
}

export default Card