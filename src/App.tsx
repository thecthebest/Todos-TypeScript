import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [
    new Todo("React"),
    new Todo("typeScript")
  ];
  const addTodoHandler = (text: string) => {
    console.log(text);
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} />
    </div>
  );
}

export default App;
