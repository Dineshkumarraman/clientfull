import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ItemService from '../ItemService';

class TableRow extends Component {

  constructor(props) {
      super(props);
      this.addItemService = new ItemService();
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addItemService.deleteData(this.props.obj._id);
  }
  render() {
    return (
          
          <p>
            {this.props.obj.item}
          </p>
         
    );
  }
}

export default TableRow;
