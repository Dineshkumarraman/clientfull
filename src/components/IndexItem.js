import React, { Component } from 'react';
import ItemService from './ItemService';
import axios from 'axios';
import TableRow from './TableRow';
import { Link } from 'react-router-dom';

var hostName = window.location.hostname;

class IndexItem extends Component {

  constructor(props) {
      super(props);
      this.state = { value: '', items: '' };
      this.addItemService = new ItemService();
    }
    componentWillMount(){
      axios.get('http://' + hostName + ':4200/items')
      .then(response => {
        this.setState({ items: response.data });
      })
      .catch(function(error) {
        console.log(error);
      })
    }
    handleEntailmentRequest(e) {
    e.preventDefault();
    window.location.href = window.location.href;
    }
    tabRow(){
      if (this.state.items instanceof Array){
        return this.state.items.map(function(object, i) {
            return <TableRow obj={object} key={i} />;
        })
      }
    }

    render() {
      return (
        <div className="container_out listPage">
            <div className="header_link">
                <Link to="/"><img src={require('../images/home-icon.png')} /></Link>
                <Link to="/send-msg"><img src={require('../images/chat-icon.png')} /></Link>
            </div>
            <div className="top_header">
               <h1>Banyanites</h1>
            </div>
            <div className="top_header_add">
              <div className="container">
                <div className="linking-button">
                <span> <Link to="/" onClick={this.handleEntailmentRequest.bind(this)}><img src={require('../images/refresh-button.png')} /></Link></span>
                  <span> <Link to="/add-item">Add member</Link></span>
                </div>
             </div>
           </div>
           <div className="container">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <td className="col-xs-3">ID</td>
                  <td className="col-xs-7">Banyanite</td>
                  <td className="col-xs-1">Edit</td>
                  <td className="col-xs-1">Delete</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
            </div>
        </div>
      );
    }
  }

export default IndexItem;
