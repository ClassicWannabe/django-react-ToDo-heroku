import React from "react";
import axios from './axios';
import './CreateNote.css'

function CreateNote(props) {
  const handleChange = (e) => {
    const {name,value} = e.target

    props.setNote(prevNote => {
      return {
        ...prevNote,
        [name]:value}
    })
  }

  const submitNote = (e) => {
    e.preventDefault()
    async function postData() {
      if (props.editMode === false) {
        var req = await axios.post('/task-create',props.note)
      } else {
        req = await axios.put(`/task-update/${props.note.id}`,props.note)
        props.setEditMode(false)
        props.setBtn('Create')
      }
      console.log(req.data);
      props.setNote({id:null,title:'',completed:false})
      props.fetchData()
      
    }
    postData();    
  }

  return (
    <div className='CreateNote'>
      <div id="form-wrapper">
        <form onSubmit={submitNote} id="form">
          <div className="flex-wrapper">
              <input
                name='title'
                onChange={handleChange}
                className="form-control"
                id="title"
                type="text"
                placeholder="Add task..."
                value={props.note.title}
                ref={props.inputRef}
              />
              <input className="btn btn-success" id="submit" type="submit" value={props.btn} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateNote;
