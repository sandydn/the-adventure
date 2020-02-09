import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Character extends Component {

  constructor(props) {
    super(props);
    this.state = {
      submitted: false, // Indique si on a validé le nom
    };
  }

  // Renvoie un message d'erreur s'il n'y a pas de nom renseigné
  getWarning() {
    if (this.state.submitted && this.props.name === '') {
      return (
        <p> Vous devez renseigner un nom !</p>
      )
    }
  }

  // Affiche le formulaire de génération des caracs une fois le nom renseigné
  getCarac() {
    if (this.state.submitted && this.props.name !== '')
    return (
      <div>
        <p>Attribuer de nouvelles caractéristiques :</p>
        <button
          className="App-btn"
          onClick={(event) => this.props.createCharacter(event)}>
          Générer
        </button>
          <p>Force : {this.props.strenght}</p>
          <p>Santé : {this.props.health}</p>
          <p>Chance : {this.props.chance}</p>
      </div>
    )
  }

  // Affiche un lien vers le jeu une fois le personnage créé
  getPlay() {
    if (this.props.characterCreated === true && this.state.submitted === true) {
      return (
        <Link className="App-btn" to={'/game'}>Jouer</Link>
      )
    }
  }

  submitName(event) {
    this.props.submitForm(event)
    this.setState({submitted: true})
  }

  render() {
    return (
      <div className="App-character">
        <form
          className="App-form">
          <div className="App-form-group">
            <label htmlFor="name">Nom du personnage :</label>
            <input 
              htmlFor="name"
              id="name" 
              type="text" 
              value={this.props.tmpName}
              onChange={(event) => this.props.handleChange(event)}
              placeholder="John Doe"
              />
            <button
              className="App-btn"
              onClick={(event) => this.submitName(event)}>
              Nommer
            </button>
            {this.getWarning()}
            {this.getCarac()}
            {this.getPlay()}            
          </div>
        </form> 
      </div>
    );
  }

}

export default Character;