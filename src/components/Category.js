import React from 'react'
import styled from 'styled-components'
import { Row } from 'antd'
import Person from './Person'


const StyledCategoryTitle = styled.div`
  background-color : ${props => (props.category === 'Good' ? 'green' : 'red')};
  padding:10px;
  margin-top:5px;
  .content-header{
    color : white;
    margin:0px;
  }
`

const Category = props => (
  <div className="content">
    <StyledCategoryTitle category={props.category} >
      <h1 className="content-header"> {props.category} </h1>
    </StyledCategoryTitle>
    <Row gutter={16}>
      {
        props.personList.map(value => (<Person
          name={value.name}
          rate={value.rate}
          plate={value.licensePlate}
          area={value.area}
          image={value.image}
          id={value.id}
          comment={value.comment}
          key={value.id}
        />))
      }
    </Row>
  </div>
)

export default Category
