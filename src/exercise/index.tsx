import "./style.css"
function Chores() {
    return(
        <div className="container">
             <div>
               <h2>Chores ToDo List</h2>
              </div>
              <div>
              <input type="checkbox"></input> <p>create guest</p>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
              </div>
              <div>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
              </div>
        </div>
    );
}

export default Chores;