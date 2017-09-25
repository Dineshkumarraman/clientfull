import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import AddItem from './components/AddItem';
import IndexItem from './components/IndexItem';
import EditItem from './components/EditItem';
import SendMsg from './components/SendMsg';
import ReceiveMsg from './components/ReceiveMsg';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/add-item' component={AddItem} />
        <Route path='/index' component={IndexItem} />
        <Route path='/edit/:id' component={EditItem} />
        <Route path='/send-msg' component={SendMsg} />
         <Route path='/receive-msg' component={ReceiveMsg} />
      </div>
  </Router>,
  document.getElementById('root')
);
