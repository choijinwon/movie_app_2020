import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
  };

  state ={
    count:20
  };
  add=() =>{
    this.setState(current =>
      ({count:current.count+1}))
  }
  Minus=() =>{
    if(this.state.count ===0){
      return false;
    }else{
      this.setState(current=>({count:current.count-1}))
    }

  }
  componentDidMount(){
    console.log("componentDidMount")
  }
  componentDidUpdate(){
    console.log("componentDidUpdate")
  }
  componentWillUnmount(){
    console.log("componentWillUnmount")
  }
  render(){
  console.log("render")
  return <div>
    <h1> The Nume is {this.state.count}</h1>
    <button onClick={this.add}>add</button>
    <button onClick={this.Minus}>Minus</button>
  </div>
  }

}
export default App;
