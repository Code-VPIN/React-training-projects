import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItem from "./components/ToDoItem";
import ToDoItem1 from "./components/ToDoItem1";
import "./App.css";

function App() {
  return (
    <>
      <center className="container">
        <AppName />
        <AddToDo />
        <div className="items-container">
          <ToDoItem />
          <ToDoItem1 />
        </div>
      </center>
    </>
  );
}

export default App;
