import React, { Component } from 'react';
import ItemService from './ItemService';
import axios from 'axios';
import TableRow from './sendmessageTable/TableRow';

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
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <label>
              Send Msg:
              <input type="text" maxLength="10" value={this.state.value} onChange={this.handleChange} className="form-control"/>
            </label><br/>
            <input type="button" value="Send" className="btn btn-primary" onClick={this.handleClick} />
          </form>
           <div className="container1">
           <input type="button" value="Receive" className="btn btn-primary" onClick={this.handleClick}/>
           <p>Message</p>
                {this.tabRow()}
        </div>
      </div>

      );
    }
  }

export default SendMsg;
