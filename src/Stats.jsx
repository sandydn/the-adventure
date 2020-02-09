import React, { Component } from 'react'

class Stats extends Component {

  render () {
    return (
      <div className='App-story'>
          <p className='App-list'>Nom : {this.props.name}</p>
          <p className='App-list'>Force : {this.props.strenght}</p>
          <p className='App-list'>Santé : {this.props.health}</p>
          <p className='App-list'>Chance : {this.props.chance}</p>
      </div>
    )
  }

}

export default Stats;