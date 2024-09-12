import List from "./components/List";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="todo-header">
        <span>TO-DO List</span>
      </div>
      <List />
    </div>
  );
}

export default App;
