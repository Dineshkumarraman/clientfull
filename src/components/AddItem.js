import React, { Component } from 'react';
import ItemService from './ItemService';
import { Link } from 'react-router-dom';

class AddItem extends Component {

  constructor(props) {
      super(props);
      this.state = { value: '' };
      this.addItemService = new ItemService();
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
      event.preventDefault();
      this.addItemService.sendData(this.state.value);
      this.props.history.push('/index');
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
              <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control"/>
            </label><br/>
            <input type="submit" value="Submit" className="btn btn-primary"/>
          </form>
      </div>
      </div>
      </div>
      );
    }
  }

export default AddItem;
/* test */
