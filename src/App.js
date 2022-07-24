import './App.css';
import axios from 'axios'
import React, { Component } from 'react';

import BeerCard from './BeerCard';

class App extends Component {
  constructor(){
    super()
    
    this.state = {
     arrayOfBeer:[],
     likedBeer:[]
  }
}
  componentDidMount(){
   axios.get('https://api.punkapi.com/v2/beers')
   .then( res => {
     const arrayOfBeer = res.data
     this.setState({arrayOfBeer})
  })
  }

  handleClick = (index) => {
    console.log("favoritando")
    console.log(index)


    this.setState({likedBeer: [...this.state.likedBeer, index]})

  }

 
 render(){
  return (
    <div className="App">
      <header className="App-header">
        <ol>{this.state.arrayOfBeer.map((beer,index) => {
          return (
            <BeerCard key={index} index={index} handleClick={this.handleClick} name={beer.name} descriptionn={beer.description} abv={beer.abv} tagline={beer.tagline} firstbrew={beer.first_brewed} image_url={beer.image_url}/>
          )
        })}</ol>
      </header>
    </div>
  );
 }
  
}

export default App;
