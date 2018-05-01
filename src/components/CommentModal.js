import React from 'react'
import { Input, Modal, List } from 'antd'

const CommentModal = props => (
  <div>
    <Modal
      title="Comment"
      visible={props.visible}
      onOk={() => props.handleOk()}
      onCancel={() => props.handleCancel()}
      okText="Comment"
    >

      <List
        size="large"
        bordered
        dataSource={props.comment}
        renderItem={item => (<List.Item>{item}</List.Item>)}
      />
      <Input placeholder="Comment" value={props.inputValue} onChange={e => props.inputChange(e.target.value)} />

    </Modal>
  </div>
)

export default CommentModal
