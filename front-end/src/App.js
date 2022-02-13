import {Browser as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Snacks from './Components/Snacks';

function App() {
  return (
    <div Class='App'>
    <Router>
      <NavBar />
      <main>
      <Routes>
        <Route path='/' elements={<Home />} />
        <Route path='/snacks' elements={<Index />} />
        <Route path='/snacks/new' elements={<New />} />
        <Route exact path='/snacks:id' elements={<Show />} />
        <Route path='/snacks:id/edit' elements={<Edit />} />
        <Route path='*' elements={<FourOFour />} />
      </Routes>
      </main>
    </Router>
    </div>
  );
}

export default App;
