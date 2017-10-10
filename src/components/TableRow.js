/* eslint-disable */
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ItemService from './ItemService';

var DeleteRow = React.createClass({
    rowDelete: function(e) {
        axios.get('http://' + hostName + ':4200/items/delete/' + this.props.data)
            .then(res => {
                this.props.onRowDelete(this.props.data)
            }).catch(err => console.log(err))

    },
    render: function() {
        return (<button data = {this.props.id} onClick = {this.rowDelete} className = "btn btn-danger trashIcon" >< /button>
        );
    },
});

var hostName = window.location.hostname;

class TableRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            items: ''
        };
        this.addItemService = new ItemService();
    }
    componentWillMount() {
        axios.get('http://' + hostName + ':4200/items')
            .then(response => {
                this.setState({
                    items: response.data
                });
            })
            .catch(function(error) {
                console.log(error);
            })
    }
    render() {
        return ( <tr>
         < td> { this.props.obj.item }
         < /td>
         < td>
         < Link to={ "/edit/" + this.props.obj._id } className="btn btn-primary editIcon">
         < /Link>
         < / td>
         < td>
         < DeleteRow data={ this.props.obj._id } onRowDelete={ this.props.onRowDelete } />
         < / td>
         < /tr>
        );
    }
}

export default TableRow;