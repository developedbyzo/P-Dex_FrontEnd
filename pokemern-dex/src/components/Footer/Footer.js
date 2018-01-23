import React, {Component} from 'react'
import {Footer} from 'react-materialize'
import './Footer.css'

class Bottom extends Component {
  render () {
    return (
      <Footer className='page-footer' copyrights='&copy 2015 Copyright Text'
        moreLinks={
          <a className='grey-text text-lighten-4 right' href='#!'>More Links</a>
}
        links={
          <ul>
            <li><a className='grey-text text-lighten-3' href='#!'>Link 1</a></li>
            <li><a className='grey-text text-lighten-3' href='#!'>Link 2</a></li>
            <li><a className='grey-text text-lighten-3' href='#!'>Link 3</a></li>
            <li><a className='grey-text text-lighten-3' href='#!'>Link 4</a></li>
          </ul>
}
        className='example'
>
        <h5 className='white-text'>Footer Content</h5>
        <p className='grey-text text-lighten-4'>You can use rows and columns here to organize your footer content.</p>
      </Footer>
    )
  }
}

export default Bottom

 /* <Footer copyrights='© 2018 Copyright P-Dex'>
        <div className='container'>
          <div className='row'>
            <div className='col l6 s12'>
              <h5 className='white-text'>Instruction</h5>
              <p className='grey-text text-lighten-4'>The P-Dex is designed for adding, editing, and removing pokémon information.To get started: Enter the Dex by clicking on the pokéball. Once you have entered the Dex, click on the 'Add A Pokémon' button to add pokémon. Fill out the information on the add page and submit. Once your pokémon has been added to the list, they may be edited by clicking on the specific pokémon. Image links can be found on Bulbapedia. Just right click and select 'Copy Image Address'.</p>
            </div>
            <div className='col l4 offset-l2 s12'>
              <h5 className='white-text'>Image Source</h5>
              <a className='grey-text text-lighten-4' href='https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pok%C3%A9mon)'>Bulbapedia</a>
            </div>
          </div>
        </div>
</Footer> */
