import React from 'react'
import Person from './Person'
import { Row } from 'antd'
import styled from 'styled-components'


const StyledCategoryTitle = styled.div`
  background-color : ${props => props.category==="Good" ? 'green' : 'red'};
  padding:10px;
  margin-top:5px;
  .content-header{
    color : white;
    margin:0px;
  }
`
class Category extends React.Component{

  render(){
    return(
      <div className="content">
        <StyledCategoryTitle category = {this.props.category} >
          <h1 className="content-header"> {this.props.category} </h1>
        </StyledCategoryTitle>
        <Row gutter={32}>        
          {
              this.props.personList.map( value => (<Person 
                  name={value.name} 
                  rate={value.rate} 
                  plate={value.licensePlate}
                  area={value.area}
                  image={value.image}
                  id={value.id}
              /> ) 
              )
          }
        </Row>
      </div>
    )
  }
}

export default Category