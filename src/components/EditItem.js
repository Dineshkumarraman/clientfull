import React, { Component } from 'react';
import axios from 'axios';
import ItemService from './ItemService';

class EditItem extends Component {

  constructor(props) {
      super(props);
      this.addItemService = new ItemService();
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {value: '' };
  }

  componentDidMount(){
    axios.get('http://localhost:4200/items/edit/'+this.props.match.params.id)
    .then(response => {
      this.setState({ value: response.data});
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addItemService.updateData(this.state.value,this.props.match.params.id);
    this.props.history.push('/index');
  }

  render() {
    return (
      <div className="container_out">
          <div className="top_header">
               <h2>Add Members</h2>
            </div>
            <div className="content_inner">
          <div className="container">
            <form className="form_content" onSubmit={this.handleSubmit}>
              <label>
                <span>Edit member in the list</span>
                <input type="text" value={this.state.value.item} onChange={this.handleChange}  className="form-control"/>
              </label><br/>
              <input type="submit" value="Update" className="btn btn-primary"/>
            </form>
        </div>
        </div>
        </div>
    );
  }
}

export default EditItem;
