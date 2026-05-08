



function Themap({Under,deletes}){
    return(
        <>
        {
          Under.map((text,index) =>
          <div key={index}>
            <p>{text}</p>
            <button onClick={() => deletes(index)}>delete</button>
          </div>
        
        )
      }
        </>
    )
}
export default Themap;