import React, {Component} from 'react'
import pokeRequest from '../../request'
class Pokemon extends Component {
  state = {
    pokemon: []
  }
  render () {
    componentDidMount = () => {
      pokeRequest.then(res => this.setState({
        pokemon: res.data
      }))
    }
    return (
      <div className='row'>
        <div className='card-panel hoverable center col s1'>
          <img className='responsive-img' src='${}' />
        </div>
      </div>
    )
  }
}

export default Pokemon
