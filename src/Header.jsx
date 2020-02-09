import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './cartman_gandalf_icon.png'
import './App.css'

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  // Affiche ou masque la modal à son appel
  toggleModal() {
    this.setState({modalVisible: this.state.modalVisible ? false : true})
  }

  // Affiche le bouton pour recommencer
  getReplay() {
    // if (window.location.pathname === '/game') {
      return (
        <button
          className="App-btn App-btn-small" 
          onClick={() => this.toggleModal()}>
          Recommencer
        </button>
      )
    // }
  }

  // Affiche la modal avec le choix proposé
  getModal() {
    if (this.state.modalVisible && window.location.pathname === '/game') {
      return (
        <div className="App-modal">
          <p>Êtes-vous sûr de vouloir recommencer ? Votre progression ne sera pas sauvegardée.</p>
          <Link 
            to={process.env.PUBLIC_URL + '/'} 
            className="App-btn App-btn-small" 
            onClick={() => this.restartGame()}>
            Oui
          </Link>
          <button className="App-btn App-btn-small" onClick={() => this.toggleModal()}>
            Non
          </button>
        </div>
      )
    }
  }

  restartGame() {
    this.props.restartGame()
    this.toggleModal()
  }

  render () {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-brand">
            <Link to={process.env.PUBLIC_URL + '/'}>
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <h2>Jeu de rôle</h2>
          </div>
          {this.getReplay()}
        </div>
        {this.getModal()}
      </div>
    )
  }

}

export default Header;