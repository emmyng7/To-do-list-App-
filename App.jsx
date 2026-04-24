import { useEffect, useState } from 'react'
import './component/Todo.css' 
import TodoList from './component/Todolist';


function App() {


  const [input,setinput] = useState('')

  const [inputdown,setinputdown]= useState(() => {
    const savedinputdown = localStorage.getItem('inputdown');
    return savedinputdown ? JSON.parse(savedinputdown) : [];
  });




  useEffect(() => {
    localStorage.setItem('inputdown',JSON.stringify(inputdown ))
  },[inputdown])


  function inputclick(){
    if (input.trim() === "") return;
    setinputdown([...inputdown,input])
    setinput('');
  }


  
  function deleteitem(deletebtn) {
    const fear = inputdown.filter((ui, index) => index!== deletebtn)
    setinputdown(fear)
  }

 

  return (
    <>
    <div className='container'>
      <div className='card'>
        <h1 className='title'>  📝 To-do List</h1>

        <div className='div1'>
         <div className='inputbox'>
            <input
              type="text" 
              value={input}
              placeholder='Enter new Task...'
              onChange={(e)=> setinput(e.target.value)}
              className='input'
            />
            <button className='addbtn' onClick={inputclick}>enter</button>
          </div>

      
             {/* 👇 this where i move the TodoList to */}
            <TodoList
              inputdown={inputdown}
              deleteitem={deleteitem}
            />
        
        </div>
      </div>
    </div>


  

    </>
  )
}

export default App
