import React from "react";
import createReactClass from 'create-react-class';

var Controller = createReactClass({
    update: function(e){
        console.log(e.target.value)
    },
    render: function(){
        var inputPropierties = {
            type: 'range',
            min: '0',
            max: '255',
            defaultValue: 255,
            onChange: this.update
        }
        return (
            React.createElement('input', inputPropierties)
        )
    }
})

export default Controller;;