import React from 'react';
import CharacterProfile from './components/CharacterProfile';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
  }
  async componentDidMount(){
    const url = 'https://swapi.dev/api/people/';
    const charactersData = await fetch(url).then(response => response.json());
    this.setState({
      characters: charactersData.results
    })
    console.log(this.state.characters)
  }
  render() {
    const { characters } = this.state;
  return (
    <div className="App">
      <header className="App-header">
       <h1>Star Wars API exercise</h1>
      </header>
      <Router>
        <Route exact path='/'>
          {characters.length ? <CharacterList characters={characters}/> : <p>Characters Loading...</p>}
         
        </Route>
        <Route path='/character/:index'>
        <CharacterProfile characters={characters}/>
        </Route>
      </Router>
    </div>
  );
}


}

export default App;
