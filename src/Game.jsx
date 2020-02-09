import React, { Component } from 'react'
import Stats from './Stats'

const Chapters = require('./story').chapters

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            position: 'start'
        }
    }

    componentDidMount() {
        const position = localStorage.getItem('position')
        if(position !== null) this.setState({position})
    }

    changePosition(id) {
        this.setState({position: id})
        localStorage.setItem("position", id)
    }

    getChoice() {
        return (
            <div>
                {Chapters[this.state.position].next.map((choice) => {
                    return (
                        <button 
                        className='App-btn App-btn-yellow'
                        onClick={() => this.changePosition(choice.id)}>
                            {choice.text}
                        </button>
                    )
                })}
            </div>
        )
    }

    hasChoice() {
        return (
            <div>
                {Chapters[this.state.position].next.map((choices, i) => {
                    return (
                        <button 
                            className='App-btn App-btn-yellow'
                            key={i}
                            onClick={() => this.changePosition(choices.id)}>
                                {choices.text}
                            </button>
                    )
                })}
            </div>
        )
    }
    
  render () {
    return (
      <div>
        <div className={`App-image-text ${this.state.position}`}></div>
        <div className='App-game' >
        <p>{Chapters[this.state.position].text}</p>
        <div className='App-choices'>{this.hasChoice()}</div>
        </div>
        <Stats
          className='App-stats'
          name = {this.props.name}
          strenght = {this.props.strenght}
          health = {this.props.health}
          chance = {this.props.chance}>
        </Stats>
      </div>
    )
  }

}

export default Game;