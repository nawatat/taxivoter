import React from 'react'
import Person from './Person'

class Category extends React.Component{
  render(){
    return(
      <div className="content">
        <div>
          <h1 className="content-header"> {this.props.category} </h1>
        </div>
        <div className="content-body">        
          {
            this.props.personList.map( value => (<Person 
                name={value.name} 
                rate={value.rate} 
                plate={value.licensePlate}
                image={value.image}/> ) 
            )
          }
        </div>
      </div>
    )
  }
}

export default Category