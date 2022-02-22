import logo from './logo.svg';
import './App.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import List from "./components/List";

function App() {
  return (
      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <h1>DND Example</h1>
          <h2>První list</h2>
          <List content={["Jedna","dvě","Honza","jde"]} />
          <h2>Druhý list</h2>
          <List content={["Tři","čtyři","někam","míří"]} />
        </div>
      </DndProvider>
  );
}

export default App;
