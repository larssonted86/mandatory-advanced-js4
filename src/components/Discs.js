import React, { Component } from 'react'

export class Discs extends Component {
 render() {
  return (            
   <div 
    style={{
     backgroundColor: this.props.value,
     width: '100%', 
     height: '100%', 
     borderRadius: '90px',
     textAlign: 'center'}}>
      {this.props.index}
   </div>             
  )
 }
}

export default Discs
