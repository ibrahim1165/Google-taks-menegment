
import './App.css';
import { Routes, Route,} from "react-router-dom";
import Navber from './pages/Shared/Navber';
import Footer from './pages/Shared/Footer';
function App() {
  return (
    <div>
      <Navber />
      <Routes></Routes>
      <Footer />
    </div>
  );
}

export default App;
