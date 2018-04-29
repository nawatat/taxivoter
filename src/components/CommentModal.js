import React from 'react'
import { Input, Modal } from 'antd'

class CommentModal extends React.Component{

  render(){
    return(
      <div>
        <Modal
          title="Comment"
          visible={ this.props.visible }
          onOk={() => this.props.handleOk()}
          onCancel={() => this.props.handleCancel()}
          okText="Comment"
        >
          <Input placeholder="Comment" onChange={ (e) =>this.props.inputChange(e.target.value)} />
     
        </Modal>
      </div> 
    )
  }
}

export default CommentModal