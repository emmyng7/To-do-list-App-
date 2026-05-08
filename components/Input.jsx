

function Input({Text,setText}){
    return(
      <>
        <input
          type="text" 
          placeholder='Enter Text...'
          value={Text}
          onChange={(e)=>setText(e.target.value)}
        />
    </>
    )
}
export default Input;