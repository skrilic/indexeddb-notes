import './App.css';
import AddBookMarkForm from './components/AddBookMarkForm';
import NotesList from './components/NotesList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h3>Notes</h3>
      </header>
      <AddBookMarkForm />
      <NotesList />
    </div>
  );
}

export default App;
