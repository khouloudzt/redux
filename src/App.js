import './App.css';
import NavBar from './components/ui/NavBar';
import MainPage from './components/MainPage'
import { useState } from 'react';
function App() {
  const [search,setSearch] = useState('');

  return (
    <div className="App">
      <NavBar setSearch={setSearch} />
      <MainPage search={search}/>
    </div>
  );
}

export default App;