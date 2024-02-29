// Import this if your are using react-bootstrap library
import "bootstrap/dist/css/bootstrap.min.css"; 


import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function firebaseApp() {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
}