import React from "react";
import TaskList from "./Components/Tasks";
import Taskform from "./Components/Taskform";


function App() {

  
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <Taskform />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
