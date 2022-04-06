import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Risk Game</h3>
      <form id="start_game">
        <div class="form-group">
          <label for="risk_tag">Start a New Game</label>
          <input type="text" 
                class="form-control"  
                placeholder="Unique game tag"
                id="risk_tag"
          />
        </div>
        <button type="submit" class="btn btn-primary">Start Game</button>
      </form> 
    </div>
  );
}

export default App;
