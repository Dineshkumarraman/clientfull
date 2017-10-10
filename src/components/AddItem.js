import React, { Component } from 'react';
import ItemService from './ItemService';
import { Link } from 'react-router-dom';
import axios from 'axios';

var hostName = window.location.hostname,thisval='',stateVal='', uniqName='';
class AddItem extends Component {

  constructor(props) {
      super(props);
      this.state = { value: '', existingItem : '' };
      this.addItemService = new ItemService();
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({ value: event.target.value });
      this.setState({ existingItem: '' });
    }

    handleSubmit(event) {
      event.preventDefault();
        if(this.state.value!==""){
      axios.get('http://' + hostName + ':4200/items/isExisting/'+this.state.value)
      .then(response => {
        if(!response.data){
           uniqName='';
        this.addItemService.sendData(this.state.value);
        this.props.history.push('/index');
      }
      else{
         uniqName='Name must be unique';
      }
       this.setState({ existingItem: uniqName });
      })
      .catch(function(error) {
        console.log(error);
      })
            }
            else{
              uniqName='This field should not be empty';
               this.setState({ existingItem: uniqName });
            }
    }

    render() {
      return (
         <div className="container_out">
         <div className="header_link">
                <Link to="/"><img alt="home-icon" src={require('../images/home-icon.png')} /></Link>
                <Link to="/send-msg"><img alt="chat-icon" src={require('../images/chat-icon.png')} /></Link>
            </div>
          <div className="top_header">
               <h2>Add Member</h2>
            </div>
            <div className="content_inner">
        <div className="container">
          <form className="form_content" onSubmit={this.handleSubmit}>
            <label>
                <span>Enter the name of Banyanite</span>
              <input type="text" value={this.state.value} maxLength="20" onChange={this.handleChange} className="form-control" autoFocus/>
            <span className="validationMsg">{this.state.existingItem}</span>
            </label><br/>
            <input type="submit" value="Submit" className="btn btn-primary"/>
             <Link to="/index" className="dangerBtn">Cancel</Link>
          </form>
      </div>
      </div>
      </div>
      );
    }
  }

export default AddItem;
