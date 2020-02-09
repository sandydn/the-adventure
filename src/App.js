import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { randomDice, saveCharacter, deleteCharacter } from './Services'
import Header from './Header'
import Game from './Game'
import Character from './Character'
import Home from './Home'
import './App.css'

class App extends Component {

  /* ===========================================================
  FONCTIONS DE CHARGEMENT DU PERSONNAGE
  =========================================================== */

  constructor(props) {
    super(props);
    this.state = {
      characterCreated: false, // Personnage créé ou pas
      name: '', // Nom du personnage
      tmpName: '', // Nom temporaire
      strenght: 0, // Force du personnage
      health: 0, // Santé du personnage
      chance: 0 // Chance du personnage
    }
  }

  // Chargement du personnage
  componentDidMount() {
      const name = localStorage.getItem('name')
      const strenght = localStorage.getItem('strenght')
      const health = localStorage.getItem('health')
      
    if (name !== null && strenght !== null && health !== null) {
      this.setState({
        characterCreated: true,
        name, 
        strenght: parseInt(strenght, 10), 
        health: parseInt(health, 10),
        chance: parseInt(health, 10)
      })
    } 
  }

  /* ===========================================================
  FONCTIONS DE CREATION DU PERSONNAGE
  =========================================================== */

  // Sauvegarde temporaire de l'entrée saisie dans l'input
  handleChange(event) {
    this.setState({tmpName :event.target.value})
  }

  // Transfert de la valeur temporaire à la valeur finale
  submitForm(event) {
    event.preventDefault()
    this.setState({name: this.state.tmpName})

    saveCharacter(this.state.tmpName, this.state.strenght, this.state.health, this.state.chance)
  }

  // Génération aléatoire des caractéristiques
  createCharacter(event) {
    event.preventDefault()
    const strenght = randomDice(7,12)
    const health = randomDice(14,24)
    const chance = randomDice(7,12)

    this.setState({
      characterCreated: true,
      strenght: strenght,
      health: health,
      chance: chance
    })

    saveCharacter(this.state.name, strenght, health, chance)
  }

  /* ===========================================================
  FONCTIONS DE SUPPRESSION DU PERSONNAGE
  =========================================================== */
  
  // Supprime les données du state et du local storage
  restartGame() {
    this.setState({
      characterCreated: false,
      name: '',
      tmpName: '',
      strenght: 0,
      health: 0,
      chance: 0
    })

    deleteCharacter()
  }

  /* ===========================================================
  AFFICHAGE DU COMPOSANT DANS LE DOM
  =========================================================== */

  render() {

    return (
      <Router>
        <div>
          <Header
            restartGame={() => this.restartGame()}
          ></Header>
          <Route 
            exact path="/" 
            render = {() => (
              <Home
                characterCreated = {this.state.characterCreated}
              ></Home>
            )}
          ></Route>
          <Route 
            exact path="/game" 
            render = {() => (
              <Game
                name = {this.state.name}
                strenght = {this.state.strenght}
                health = {this.state.health}
                chance = {this.state.chance}
              ></Game>
            )}
          ></Route>
          <Route 
            exact path="/character" 
            render = {() => (
              <Character
                characterCreated = {this.state.characterCreated}
                name = {this.state.name}
                tmpName = {this.state.tmpName}
                strenght = {this.state.strenght}
                health = {this.state.health}
                chance = {this.state.chance}
                handleChange = {(event) => this.handleChange(event)}
                submitForm = {(event) => this.submitForm(event)}
                createCharacter = {(event) => this.createCharacter(event)}
              ></Character>
            )}
          ></Route>
        </div>
      </Router>
    );
  }

}

export default App;