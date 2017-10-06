/* eslint-disable */ 

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ItemService from './ItemService'; 
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
        <tr>
          <td>
            {this.props.obj._id}
          </td>
          <td>
            {this.props.obj.item}
          </td>
          <td>
          <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary editIcon"></Link>
        </td>
          <td>
            <form onSubmit={this.handleSubmit}>
              <input type="submit" value="" className="btn btn-danger trashIcon"/>
            </form>
          </td>
        </tr>
    );
  }
}

export default TableRow;
