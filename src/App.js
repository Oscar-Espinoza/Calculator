import { Route, Routes } from 'react-router-dom';
import CalculatorRoute from './routes/CalculatorRoute';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Quote from './routes/Quote';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<CalculatorRoute />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
