import logo from './logo.svg';
import './App.css';
import DayTasks from './DayTasks.js';
import AddTask from './AddTask.js';

function App() {

  return (
    <div className="App">
      <DayTasks date={Date()} tasks={[{time:5, title:'test', desc:'a test object', priority:0, onClick:()=>alert('bruh')}]}/>
      <AddTask />
    </div>
  );
}

export default App;
