import axios from 'axios';

class ItemService {

  sendData(data) {
    axios.post('http://13.90.196.105:4200/items/add/post', {
      item: data
    })
    .then(res => this.setState({ items: res.data }))
    .catch(err => console.log(err))
  }

  updateData(data, id){
    axios.post('http://13.90.196.105:4200/items/update/'+id, {
      item: data
    })
    .then(res => this.setState({ items: res.data }))
    .catch(err => console.log(err))
  }

  deleteData(id){
    axios.get('http://13.90.196.105:4200/items/delete/'+id)
    .then().catch(err => console.log(err))
  }
  
  sendMsgs(data) {
    axios.post('http://13.90.196.105:4200/items/send', {
      item: data
    })
    .then(res => this.setState({ items: res.data }))
    .catch(err => console.log(err))
  }

   receiveMsgs(data) {
    axios.post('http://13.90.196.105:4200/items/receive', {
      item: data
    })
    .then(res => this.setState({ items: res.data }))
    .catch(err => console.log(err))

  }
}

export default ItemService;
