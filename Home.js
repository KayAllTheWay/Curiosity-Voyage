import React, { Component } from 'react'
 import Jumbotron from './Jumbotron'
 import Table from './Table/Table'

class Home extends Component {
     constructor ()
     { super()

 this.state = { 
     knowledge_box: [ 
         { id: 1, title: 'What would happen if the Earth Stopped Spinning?', description:'lorem ipsum', active: false}, 
         { id: 2, title: 'What would happen if the sun went out?', description:'lorem ipsum', active: false}, 
         { id: 3, title: 'What would it be like being the last person on Earth?', description:'lorem ipsum', active: false}, 
         { id: 4, title: 'What would happen if we used our brains to full capacity?', description:'lorem ipsum', active: false}, 
         { id: 5, title: 'If time travel was real...', description:'', active: false},
         
          ] 
       } 
    }

handleVideoChange(item, event){ 
    event.preventDefault()

 let knowledge_box = [...this.state.knowledge_box]

 knowledge_box.map( data => { 
     data.active = false 
})
 item.active = !item.active
 knowledge_box[item.id - 1] = item
 this.setState({knowledge_box}) 
 }
 render () {
      return ( 
          <div> 
          <Jumbotron/> 
          <Table handleVideoChange={this.handleVideoChange.bind(this)} knowledge_box={this.state.knowledge_box}/> 
          </div> 

        ) 
    }
}


export default Home 