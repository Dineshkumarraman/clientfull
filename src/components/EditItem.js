import React, { Component } from 'react';
import axios from 'axios';
import ItemService from './ItemService';
import { Link } from 'react-router-dom';
import validateLength from '../validateFolder/validate'
var hostName=window.location.hostname, uniqName='';
class EditItem extends Component {

  constructor(props) {
      super(props);
      this.state = {value: '', existingItem : '' };
      this.addItemService = new ItemService();
      this.validateLength1 = new validateLength(this.state.value);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    axios.get('http://'+hostName+':4200/items/edit/'+this.props.match.params.id)
    .then(response => {
      this.setState({ value: response.data});
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
     this.setState({ existingItem: '' });
  }

  handleSubmit(event) {
    event.preventDefault();
  if(this.state.value!==""){
      this.addItemService.updateData(this.state.value,this.props.match.params.id);
        this.validateLength1.checkLength();
        this.props.history.push('/index');
        uniqName='';
            }
            else{
              uniqName='This field should not be empty';
            }
                           this.setState({ existingItem: uniqName });
  }

  render() {
    return (
      <div className="container_out">
      <div className="header_link">
                <Link to="/"><img alt="home-icon" src={require('../images/home-icon.png')} /></Link>
                <Link to="/send-msg"><img alt="chat-icon" src={require('../images/chat-icon.png')} /></Link>
            </div>
          <div className="top_header">
               <h2>Edit Member</h2>
            </div>
            <div className="content_inner">
          <div className="container">
            <form className="form_content" onSubmit={this.handleSubmit}>
              <label>
                <span>Enter the new name of Banyanite</span>
                <input type="text" value={this.state.value.item} maxLength="20" onChange={this.handleChange}  className="form-control" autoFocus/>
                  <span className="validationMsg">{this.state.existingItem}</span>
              </label><br/>
              <input type="submit" value="Update" className="btn btn-primary"/>
               <Link to="/index" className="dangerBtn">Cancel</Link>
            </form>
        </div>
        </div>
        </div>
    );
  }
}

export default EditItem;
