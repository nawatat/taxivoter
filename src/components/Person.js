import React from 'react'
import { Card, Icon, Col } from 'antd'
import axios from 'axios'
import CardDescription from './CardDescription'
import CommentModal from './CommentModal'
import RateModal from './RateModal'


const { Meta } = Card

class Person extends React.Component {
  state = {
    showCommentModal: false,
    showRateModal: false,
    averageRateValue: 0,
    rateCount: 0,
    commentList: [],
    commentInputValue: '',
  }
  componentDidMount() {
    this.computeRateValue(this.props.rate)
    if (this.props.comment) {
      this.setState({
        commentList: this.props.comment,
      })
    }
  }

  showCommentModal = () => {
    this.setState({
      showCommentModal: true,
    })
  }

  showRateModal = () => {
    this.setState({
      showRateModal: true,
    })
  }

  handleRateModalOk = (newRateValue) => {
    axios.patch(`/taxis/${this.props.id}`, {
      rate: [...this.props.rate, newRateValue],
    })
      .then((response) => {
        this.computeRateValue(response.data.rate)
        this.setState(() => ({
          showRateModal: false,
        }))
      })
  }

  handleCommentModalOk = async () => {
    await this.setState(() => ({
      commentList: [...this.state.commentList, this.state.commentInputValue],
    }))

    console.log(this.state.commentList)
    axios.patch(`/taxis/${this.props.id}`, {
      comment: this.state.commentList,
    })
      .then(() => {
        this.setState(() => ({
          commentInputValue: '',
        }))
      })
  }

  inputChange = (data) => {
    this.setState(() => ({
      commentInputValue: data,
    }))
  }

  handleCancel = () => {
    this.setState({
      showCommentModal: false,
      showRateModal: false,
    })
  }

  computeRateValue = (rateList) => {
    const sumRate = rateList.reduce((sum, value) => sum + value, 0)
    this.setState(() => ({
      averageRateValue: sumRate / rateList.length,
      rateCount: rateList.length,
    }))
  }


  render() {
    return (
      <Col className="gutter-row" style={{ padding: '5px' }} lg={6} sm={24}>
        <Card
          hoverable
          cover={<img alt="example" src={this.props.image} />}
          actions={[<Icon type="star-o" onClick={() => this.showRateModal()} />, <Icon type="edit" onClick={() => this.showCommentModal()} > ( {this.state.commentList ? this.state.commentList.length : 0 } ) </Icon>, <Icon type="ellipsis" />]}
        >
          <Meta
            title={this.props.name}
            description={(
              <CardDescription
                rate={this.state.averageRateValue}
                rateCount={this.state.rateCount}
                plate={this.props.plate}
                area={this.props.area}
              />
            )}
          />

          <CommentModal
            visible={this.state.showCommentModal}
            handleOk={this.handleCommentModalOk}
            handleCancel={this.handleCancel}
            inputChange={this.inputChange}
            comment={this.state.commentList}
            id={this.props.id}
            inputValue={this.state.commentInputValue}
          />

          <RateModal
            visible={this.state.showRateModal}
            handleOk={this.handleRateModalOk}
            handleCancel={this.handleCancel}
            id={this.props.id}
          />


        </Card>
      </Col>
    )
  }
}

export default Person
