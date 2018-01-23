import React, { Component } from 'react'
import Header from '../Header/Header'
import Pokemon from '../Pokemon/Pokemon'
import Bottom from '../Footer/Footer'
// import './App.css';

class App extends Component {
  render () {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Pokemon />
        </main>
        <footer>
          <Bottom />
        </footer>
      </div>
    )
  }
}

export default App
