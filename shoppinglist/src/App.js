import React, { Component } from 'react';

const Title = ({posCount}) => {
  return (
    <div>
    <div>
    <h1>Shopping-List  ({posCount})</h1>
    </div>
    </div>
  );
}

const ShoppingForm = ({ addPos }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        addPos(input.value);
        input.value = '';
      }}>
        +
    </button>
    </div>
  );
}
const Pos = ({pos, remove}) => {
  return (<li onClick={() => 
    {remove(pos.id)}}>
    {pos.text}</li>);
}
const ShoppingList = ({poss, remove}) => {
  const posNode = poss.map((pos) => {
    return (<Pos pos={pos} key={pos.id} remove={remove} />);
  });
  return (<ul>{posNode}</ul>);
}

window.id = 0;
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }
  addPos(val){
    const pos = {text:val, id: window.id++}
    this.state.data.push(pos);
    this.setState({data: this.state.data});
  }
  handleRemove(id){
    const remainder = this.state.data.filter((pos) => {
      if(pos.id !== id) return pos;
    });
    this.setState({data: remainder});
  }

  render() {
    return (
      <div>
        <Title posCount={this.state.data.length}/>
        <ShoppingForm addPos={this.addPos.bind(this)} />
        <ShoppingList
          poss={this.state.data}
          remove={this.handleRemove.bind(this)}
          />
      </div>
    );
  }
}

export default App;
