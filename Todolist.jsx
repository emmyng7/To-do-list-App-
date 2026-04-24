function TodoList({ inputdown, deleteitem }) {
  return (
    <div>
      {inputdown.map((ui, index) => (
        <div key={index} className="map">
          <p>{ui}</p>

          <button
            className="deletebtn"
            onClick={() => deleteitem(index)}
          >
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;