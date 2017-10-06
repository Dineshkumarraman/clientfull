import React, {Component} from 'react';
import ItemService from './ItemService';
import axios from 'axios';
import TableRow from './sendmessageTable/TableRow';
import {Link} from 'react-router-dom';
var hostName = window.location.hostname;

class SendMsg extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            items: ''
        };
        this.addItemService = new ItemService();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.receiveMqMsg = this.receiveMqMsg.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    componentWillMount() {
        axios.get('http://'+hostName+':4200/items/receive')
            .then(response => {
                console.log("data", response.data)
                this.setState({
                    items: response.data
                });
            })
            .catch(function(error) {
                console.log("error", error);
            })
        setInterval(this.receiveMqMsg, 100);
    }
    receiveMqMsg() {
        axios.get('http://'+hostName+':4200/items/receiveMq')
            .then(response => {
                this.setState({
                    items: response.data
                });
            })
            .catch(function(error) {
                console.log("error", error);
            })
    }
    handleClick(event) {
        event.preventDefault();
            this.addItemService.sendMsgs(this.state.value);
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
      <div className="container_out">
           <div className="header_link">
                <Link to="/"><img alt="home-icon" src={require('../images/home-icon.png')} /></Link>
            </div>
          <div className="top_header">
               <h2>RabbitMq</h2>
            </div>
            <div className="content_inner">
        <div className="container_new">
          <div className="send_content">
          <h3>Send Message</h3>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control"/>
            </label><br/>
            <input type="button" value="Send" className="btn btn-primary" onClick={this.handleClick} />
          </form>
          </div>
           <div className="container1 receive_content">
           <h3>Received Message</h3>
           {this.tabRow()}
        </div>
      </div>
      </div>
       </div>
      );
    }
  }
export default SendMsg;
