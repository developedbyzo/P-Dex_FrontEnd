import React, {Component} from 'react'
// import getRequest from '../../request'
import axios from 'axios'
import { POKEMERN_URL } from '../../constant'

class Pokemon extends Component {
  constructor (props) {
    super()
    this.state = {
      pokemon: []
    }
  }

  componentDidMount () {
    axios
    .get(`${POKEMERN_URL}`)
    .then(response => this.setState({pokemon: response.data}))
    .catch(err => console.log(err))
  }

  render () {
    let pokemon = this.state.pokemon.map((pokemon) => {
      return (<img key={pokemon._id} className='responsive-img' src={pokemon.url} />)
    })
    return (
      <div className='row'>
        <div className='card-panel hoverable center col s1'>
          {pokemon}
        </div>
      </div>
    )
  }
}

export default Pokemon
