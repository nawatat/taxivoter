import React from 'react'

class Person extends React.Component{
  render(){
    return(
      <div className="item">
        <h3> {this.props.name} </h3>
        <img src={this.props.image} alt="pict"/>
        <p> rate = {this.props.rate} plate= {this.props.plate}</p>
      </div>
    )
  }
}

export default Person