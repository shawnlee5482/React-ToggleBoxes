var React = require('react')
var ReactDOM = require('react-dom')

// This file holds our JSON array of turtles
var Box = require('./box.js');

var App = React.createClass({
  getInitialState: function() {
    return {
      display1: false,
      display2: false
    }
  },  
  toggleAll: function() {
    this.toggleDisplay1();
    this.toggleDisplay2();
  },
  toggleDisplay1: function() {
    this.setState({
      display1: !this.state.display1
    })    
  },
  toggleDisplay2: function() {
    this.setState({
      display2: !this.state.display2
    }) 
  }, 
  getDisplay1: function() {
    return this.state.display1;
  },
  getDisplay2: function() {
    return this.state.display2;
  }, 
  render: function(){
    return (
      <div>
        <button onClick={this.toggleAll}>Toggle All Boxes</button>
        <div>
          <Box color='black' toggleDisplay={this.toggleDisplay1} getDisplay={this.getDisplay1}/>
          <Box color='blue' toggleDisplay={this.toggleDisplay2} getDisplay={this.getDisplay2}/>
        </div>
      </div>
    )
  }
});

ReactDOM.render(<App/>, document.getElementById('app'))
