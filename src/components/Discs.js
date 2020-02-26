import React, { Component } from 'react'

export class Discs extends Component {
 render() {
  const row = Math.floor(this.props.index / 7);
  const column = this.props.index % 7;
  
  return (            
   <div 
    style={{
     backgroundColor: this.props.value,
     width: '100%', 
     height: '100%', 
     borderRadius: '90px',
     textAlign: 'center'}}>
      {row}, {column}

   </div>             
  )
 }
}

export default Discs
