import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './index.css';

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";

import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className='App'>
    <Router>
      <NavBar />
      <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/snacks" element={<Index />} />
        <Route path="/snacks/new" element={<New />} />
        <Route path="/snacks/:id" element={<Show />} />
        <Route path="/snacks/:id/edit" element={<Edit />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
      </main>
     </Router>
    </div>
  );
}

export default App;
