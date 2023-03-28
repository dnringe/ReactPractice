import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="Container">
      <BrowserRouter>
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/" element={<Read />} />
        <Route path="/update" element={<Update />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
