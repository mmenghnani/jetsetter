import React, { Component } from "react";
import uniqueId from "lodash/uniqueId";
import CountDown from "./CountDown";
import NewItem from "./NewItem";
import Items from "./Items";

import "./Application.css";

const defaultState = [
  { value: "Pants", id: uniqueId(), packed: false },
  { value: "Jacket", id: uniqueId(), packed: false },
  { value: "iPhone Charger", id: uniqueId(), packed: false },
  { value: "MacBook", id: uniqueId(), packed: false },
  { value: "Sleeping Pills", id: uniqueId(), packed: true },
  { value: "Underwear", id: uniqueId(), packed: false },
  { value: "Hat", id: uniqueId(), packed: false },
  { value: "T-Shirts", id: uniqueId(), packed: false },
  { value: "Belt", id: uniqueId(), packed: false },
  { value: "Passport", id: uniqueId(), packed: true },
  { value: "Sandwich", id: uniqueId(), packed: true }
];

class Application extends Component {
  constructor() {
    super();
    this.state = {
      items: defaultState
    };
  }

  // How are we going to manipulate the state?
  // Ideally, users are going to want to add, remove,
  // and check off items, right?

  addItem = item => {
    this.setState({
      items: [item, ...this.state.items]
    });
  };

  unpackAll = () => {
    const items = this.state.items.map(item => {
      item.packed = false;
      return item
    });
    this.setState({
      items
    })
  }

  removeItem = itemtoRemove => {
    this.setState({
      items : this.state.items.filter(item => item.id !== itemtoRemove.id)
    }); 
  }

  toggleItem = itemToToggle => {
    const items = this.state.items.map(item => {
      if(item.id !== itemToToggle.id) return item;
      return { ...itemToToggle , packed : !itemToToggle.packed}
    })
    this.setState({
      items
    })
  }

   render() {
    // Get the items from state
    let { items } = this.state;
    let getUnpackedItems = items.filter(element => !element.packed);

    let packedItems = items.filter(element => element.packed);

    return (
      <div className="Application">
        <NewItem onSubmit={this.addItem}/>
        <Items title="Unpacked Items" items={getUnpackedItems} onRemove = {this.removeItem} onToggle={this.toggleItem}/>
        <Items title="Packed Items" items={packedItems} onRemove = {this.removeItem} onToggle={this.toggleItem}/>
        <button className="button full-width" onClick={this.unpackAll}>
          Mark All As Unpacked
        </button>
      </div>
    );
  }
}

export default Application;
