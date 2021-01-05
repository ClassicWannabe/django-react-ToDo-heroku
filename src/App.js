import {useState, useEffect, useRef} from 'react';
import axios from './axios';
import './App.css';
import Note from './Note';
import CreateNote from './CreateNote'

function App() {
  const [items,setItems] = useState([])
  const [note,setNote] = useState({id:null,title:'',completed:false})
  const [editMode,setEditMode] = useState(false)
  const inputRef = useRef()
  const [btn,setBtn] = useState('Create')
  
  async function fetchData(){
      const req = await axios.get('/task-list')
      setItems(req.data)
  }
  useEffect(() => fetchData(),[])


  async function deleteItem(id) {
    const res = await axios.delete(`/task-delete/${id}`)
    console.log(res)
    fetchData()
  }

  const editItem = (item) => {
    setEditMode(true)
    setNote(item)
    inputRef.current.focus()
    setBtn('Edit')
  }

  async function strikeItem(item) {
    item.completed = !item.completed
    const res = await axios.put(`/task-update/${item.id}`,
    {
      'completed':item.completed,'title':item.title
    })
    console.log(res);
    fetchData()
  }

  return (
    <div className="App">
      <div className='container'>
        <div id='task-container'>
          <CreateNote 
           fetchData={fetchData} 
           editMode={editMode}
           setEditMode={setEditMode}
           setNote={setNote}
           note={note}
           inputRef={inputRef}
           btn={btn}
           setBtn={setBtn}
          />
          <div id='list-wrapper'>
            {items.map((item) => {
              return (
                <Note
                 item={item}
                 key={item.id}
                 id={item.id}
                 title={item.title}
                 deleteItem={deleteItem}
                 editItem={editItem}
                 strikeItem={strikeItem}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
