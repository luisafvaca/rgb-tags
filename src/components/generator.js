import React from "react";
import createReactClass from 'create-react-class';

var Controller = createReactClass({
    render: function(){
        var inputPropierties = {
            type: 'range',
            min: '0',
            max: '255',
            defaultValue: 255,
            onChange: this.props.updateColor
        }
        return (
            React.createElement('input', inputPropierties)
        )
    }
})

export default Controller;;