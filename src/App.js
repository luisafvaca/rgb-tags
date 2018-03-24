import React, { Component } from 'react';
import createReactClass from 'create-react-class';
import Controller from './components/generator';

var App = createReactClass({
  render: function(){
    console.log(Controller, '----------');
    return (
      <Controller />
    )
  }
})

export default App;
