import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
    goToForm() {
        if(this.props.characterCreated === false) {
            return (
                <Link className='App-btn' to={'/character'}>Crée ton perso</Link>
            )
        }
    }

    goToGame() {
        if(this.props.characterCreated === true) {
            return (
                <Link className='App-btn' to={'/game'}>Continuer</Link>
            )
        }
    }

    render() {
        return (
            <div className='App-home'>
                <div className='App'>
                    <p className="App-intro"><bold>Bienvenue jeune aventurier!</bold></p>
                    {this.goToForm()}
                    {this.goToGame()}
                </div>
            </div>
        )
    }
}

export default Home
