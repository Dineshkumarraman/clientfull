import React, { Component } from 'react';
import ItemService from './ItemService';
import axios from 'axios';
import TableRow from './sendmessageTable/TableRow';
import { Link } from 'react-router-dom';

class SendMsg extends Component {

  constructor(props) {
      super(props);
      this.state = {value: '', items: ''};
      this.addItemService = new ItemService();

       this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
       this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
      console.log("called");
     
     
    }
    handleClick(event){
      console.log("inputName", event.target.value);
             event.preventDefault();
      if(event.target.value=="Send"){
         this.addItemService.sendMsgs(this.state.value);
      }
      else{
       axios.get('http://localhost:4200/items/receive')
      .then(response => {
        console.log("data",response.data)
        this.setState({ items: response.data });
        // this.setState({value: event.target.value});
      })
      .catch(function (error) {
        console.log("error",error);
      })
    }
    }
     tabRow(){
      if(this.state.items instanceof Array){
        return this.state.items.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        })
      }
    }
    

    render() {
      return (
      <div className="container_out">
           <div className="header_link">
                <Link to="/"><img src={require('../images/home-icon.png')} /></Link>
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
           <h3>Receive Message</h3>
           <input type="button" value="Receive" className="btn btn-primary" onClick={this.handleClick}/>
           {this.tabRow()}
        </div>
      </div>
      </div>
       </div>
      );
    }
  }
export default SendMsg;
