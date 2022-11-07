
import './App.css';
// import Item from './MyItem';
// import Item2 from './MyItem2';
// import { Component } from 'react';
import React from 'react';


// class FilmItemRow extends React.Component {
//   render() {
//     return (
//       <li>
//         <a href={this.props.url}>{this.props.url}</a>
//       </li>
//     )
//   }
// }

class StarWars extends React.Component {

  constructor() {
    super()
    this.state = {
      lodadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      image: null,
      //films: [],
    }

  }


  getNewCharacter() {
    const randomNumber = Math.round(Math.random() * 88)
    console.log("Get new character from a button")
    const url = `https://blastiq.github.io/starwars-api/api/id/${randomNumber}.json`
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        
        console.log(data);


    this.setState({
      name: data.name,
      height: data.height,
      homeworld: data.homeworld,
      image: data.image,
      lodadedCharacter: true,
    })
    })
  }
  
  render(){
    // const movies = this.state.films.map((url, i) => {
    //   return <FilmItemRow key={i} url={url} />
    // })
    return(
      <div>
        {

          this.state.lodadedCharacter &&
          <div>
          
          <h1>{this.state.name}</h1>
          <p><img src={this.state.image} alt={this.state.name} className="img" /></p>
          <p>{this.state.height}</p>
          <p><a href={this.state.homeworld}>{this.state.homeworld}</a></p>
          {/* <ul>
            {movies}
          </ul> */}

          </div>
        }

        <button type="button" onClick={() => this.getNewCharacter()} className='btn'>Randomize Character</button>
        
      </div>
      
    )
  }


}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
