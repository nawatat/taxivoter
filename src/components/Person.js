import React from 'react'
import { Card, Icon, Col } from 'antd'
import CardDescription from './CardDescription'
import CommentModal from './CommentModal'
import axios from 'axios'
const { Meta } = Card;

class Person extends React.Component{
  state = { inputValue : "", showModal: false }
  showModal = () => {
    this.setState({
      showModal: true
    });
  }

  inputChange = (data) => {
    this.setState({
      inputValue:data
    })
  }

  handleOk = () => {
    this.setState({
      showModal:false
    })

    axios.patch(`/taxis/${this.props.id}`, {
      comment : this.state.inputValue
    })
    .then( response => {
      console.log(response)
      console.log("OK input value = ", this.state.inputValue)
    })
  }

  handleCancel = () => {
    this.setState({
      showModal:false
    })
  }

  render(){
    return(
      <Col className="gutter-row" style={{padding:"5px"}} lg={6} sm={24}>
        <Card
          hoverable
          cover={<img alt="example" src={this.props.image} />}
          actions={[<Icon type="setting" />, <Icon type="edit" onClick={()=>this.showModal()}/>, <Icon type="ellipsis" />]}
        >
          <Meta
            title={this.props.name}
            description =  { <CardDescription rate={this.props.rate} plate={this.props.plate} area={this.props.area} /> }
          />

          <CommentModal visible={this.state.showModal} handleOk={this.handleOk} handleCancel={this.handleCancel} inputChange={this.inputChange}/>


        </Card>
      </Col>
    )
  }
}

export default Person
