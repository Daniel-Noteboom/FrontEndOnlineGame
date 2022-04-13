import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import store from './store';
import './App.css';
import StartGame from './components/intro/StartGame';
import AddPlayer from './components/intro/AddPlayer';
import RiskGame from './components/game/RiskGame';
function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="app">
        <h3>Risk Game</h3>
        <Routes>
          <Route path="" element={< StartGame />} />
          <Route path="add_players/:tag" element={< AddPlayer />} />
          <Route path=":tag" element={< RiskGame />} />
        </Routes>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
