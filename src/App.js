import React from 'react';

export default class App extends React.Component {
  constructor() {
  	super();
    this.state = {
    	currentTodo: '',
      todos: []
    };
    
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitText = this.onSubmitText.bind(this);
    // this.deleteCurrent = this.deleteCurrent.bind(this);
  }
  
  onChangeText(event) {
    console.log(event.target.value.length);
    if((event.target.value.length + 1) > 70) return false;
  	this.setState({ currentTodo: event.target.value });
	}
  
  onSubmitText(event) {
    //The preventDefault() method stops the default action of an element from happening.
    event.preventDefault()
    if(this.state.currentTodo === '') return false;
    this.setState({
      currentTodo: '', //We clean the input text
      todos: [...this.state.todos, this.state.currentTodo]
    });
  }

  deleteCurrent(index){
    let x = this.state.todos;
    x.splice(index,1);
    
    this.setState({
      todos: [...this.state.todos]
    });
  }

  render() {
    return (
      <div id="list">
      <h1>TODO list</h1>
        <form onSubmit={this.onSubmitText}>
          <input value={this.state.currentTodo} onChange={this.onChangeText} />
          <button>ADD</button>
        </form>
        <ul>
        {
          this.state.todos.map((todo, index) => <li key={index}>
          <hr></hr>
            <div id="todoActivity">
              {todo}
              <button onClick={()=> this.deleteCurrent(index)}> X </button>
              </div>
            </li>
            )
        }
        <hr></hr>
        </ul>
      </div>
    )
  }
}
