import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import GridCard from './GridCard/GridCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();

    this.state = {
      link2 : 'https://newsapi.org/v2/top-headlines?country=hk&category=business&apiKey=8c41f64fa8a84841a894eabc73d19722',
        
    }
  
  }

  componentDidMount(){
    //this.child.current.fetchInitialData(this.state.link2);
  }
  render() {
    
    return (
      
      <div className="App">

        <header>
          <NavBar />
        </header>
        
        <GridCard ref={this.child} />
        
        
        <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/grids-responsive-min.css" />

      </div>
    );
  }
}

export default App;
