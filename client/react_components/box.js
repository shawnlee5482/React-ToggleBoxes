var React = require('react')
var ReactDOM = require('react-dom')

module.exports = React.createClass({
    toggleDisplay: function(){
      this.props.toggleDisplay();
    },
    render: function (){
        var displayClass = (this.props.getDisplay()) ? 'show' : 'hide'
        return (
          <div className='box-holder'>
            <button onClick={this.toggleDisplay}>
              Toggle {this.props.color} box
            </button>
            <div className={displayClass+' '+this.props.color}>
            </div>
          </div>
        )
    }
});