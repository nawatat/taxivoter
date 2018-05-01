import React from 'react'
import { Modal, Rate } from 'antd'


class RateModal extends React.Component {
  state = { rateValue: 0 }

  rateOnchange = (data) => {
    this.setState(() => ({
      rateValue: data,
    }))
  }


  render() {
    return (
      <div>
        <Modal
          title="Rate this taxi"
          visible={this.props.visible}
          onOk={() => this.props.handleOk(this.state.rateValue)}
          onCancel={() => this.props.handleCancel()}
          okText="Rate"
        >
          <Rate
            allowHalf
            onChange={rate => this.rateOnchange(rate)}
          />
          ( {this.state.rateValue} )


        </Modal>
      </div>
    )
  }
}

export default RateModal
