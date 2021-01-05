import React from 'react'
import './Note.css'

function Note(props) {
    const deleteNote = () => {
        props.deleteItem(props.id)
    }
    const editNote = () => {
        props.editItem(props.item)
    }
    return (
        <div  className='Note'>
            <div className='task-wrapper' onClick={() => props.strikeItem(props.item)}>
            {props.item.completed === false ? (
                <span className='title'>{props.title}</span>
            ):(
                <strike className='title'>{props.title}</strike>
            )} 
            </div> 
            <button className='btn btn-outline-success buttons' onClick={editNote}>Edit</button>
            <button className='btn btn-outline-danger buttons' onClick={deleteNote}>Delete</button>    
        </div>
    )
}

export default Note
