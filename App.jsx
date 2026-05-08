import { useState,useEffect } from 'react'
import Input from './components/Input';
import Btnadd from './components/Btnadd';
import Themap from './components/Themap';
import './components/Toddo.css';

function App() {
  
  const [Text,setText] = useState('')
  
    const [Under,setUnder]= useState(() => {
    const savedUnder = localStorage.getItem('Under');
    return savedUnder ? JSON.parse(savedUnder) : [];
  });


   useEffect(() => {
    localStorage.setItem('Under',JSON.stringify(Under ))
  },[Under])


  function add(){
    if (Text.trim() ==='') return;
    setUnder([...Under,Text])
    setText('')
  }

  function deletes(dex){
    const remove = Under.filter((Text,index) => index !== dex)
    setUnder(remove)
  }
    return(
      <>

      <div className='maindiv'> 
        
        <div>
 
       <Input Text={Text} setText={setText}/>

      <Btnadd add={add}/>
      </div>

          
      </div>



        
       <Themap
       Under={Under} 
       deletes={deletes}
        />
        
      </>
    )
  
}

export default App;
