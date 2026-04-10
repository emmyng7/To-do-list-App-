import { useEffect, useState } from 'react'
import './Todo.css' 


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
    const fear = inputdown.filter((inputdown, index) => index!== deletebtn)
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

      
          {
            inputdown.map((ui,index)=>{
            return <div className='map'>
             <p key={index}>{ui}</p>

              <button 
               className='deletebtn'
               onClick={() => deleteitem(index)}>delete
               ❌
              </button>

             </div>
        
            })
          }
        
        </div>
      </div>
    </div>


  

    </>
  )
}

export default App
