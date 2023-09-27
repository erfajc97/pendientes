import { TaskProvider } from "./Context/TaskContext";
import Main from "./Pages/Main";

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <Main />
      </TaskProvider>
    </div>
  );
}

export default App;
