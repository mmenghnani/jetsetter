import React, { Component } from "react";
import uniqueId from "lodash/uniqueId";

import "./NewItem.css";

class NewItem extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
   }
  handleChange = event => {
    // Do something when the state of this input changes.
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    const { onSubmit } = this.props;
    const { value } = this.state;
    event.preventDefault();
    // Do something when a new value is submitted.
    // Reset the state of the component.
    onSubmit({value:value,packed : false, id : uniqueId()});
    this.setState({
      value: ""
    });
  };

  render() {
    const { value } = this.state;

    return (
      <form className="NewItem" onSubmit={this.handleSubmit}>
        <input
          className="NewItem-input"
          type="text"
          value={value}
          onChange={this.handleChange}
        />
        <input className="NewItem-submit button" type="submit" />
      </form>
    );
  }
}

export default NewItem;
