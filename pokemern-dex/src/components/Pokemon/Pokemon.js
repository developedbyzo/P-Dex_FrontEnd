import React, {Component} from 'react'
import pokeRequest from '../../request'

class Pokemon extends Component {
  constructor (props) {
    super()
    this.state = {
      pokemon: []
    }
  }

  componentDidMount () {
    pokeRequest.then(response => this.setState({pokemon: response.data}))
    .catch(err => console.log(err))
  }

  render () {
    let pokemon = this.state.pokemon.map((pokemon, index) => {
      return (
        // <div className='container'>
        //   <div className='row'>
        //   <div className='col s12'>
        <div key={index + 1} className='card-panel hoverable center col s1'>
          <img className='responsive-img' src={pokemon.url} />
        </div>
        //   </div>
        // </div>
        // </div>
      )
    })
    return (
      <div className='center'>
        <input type='submit' value='Add' />
        <div className='row'>
          {pokemon}
        </div>
      </div>

    )
  }
}

export default Pokemon
