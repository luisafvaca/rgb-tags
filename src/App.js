import React from 'react';
import createReactClass from 'create-react-class';
import Controller from './components/generator';

var App = createReactClass({
  getInitialState: function(){
   return {
     color: 0
   }
  },
  updateColor: function(e){
    this.setState({
      color: e.target.value
    })
  },
  render: function(){
    console.log(this.state);
    return (
      <section>
        <Controller updateColor={this.updateColor}/>
      </section>
    )
  }
})

export default App;
