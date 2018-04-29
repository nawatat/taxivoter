import React, { Component } from 'react'
import AppHeader from './AppHeader'
import Category from './Category'
// import Data from '../data'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import axios from 'axios'
const { Footer, Content } = Layout


class App extends Component {
  state = { goodList: [], badList: [] }
  componentDidMount(){
    axios.get('/taxis')
      .then( value  => {
        console.log( value )
        this.setState(() => ({
          goodList: value.data.filter( item => item.rate >= 2.5  ),
          badList: value.data.filter( item => item.rate < 2.5  )
        }))
    }) 
  }
  render() {
    console.log( this.state  )
    return (
      <div>
      
        <Layout>
          <AppHeader />
          <Content>
            <Category category="Good" nameList="Good1" personList={this.state.goodList} />
            <Category category="Bad" nameList="Bad1" personList={this.state.badList} />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;

// State       /  >
// Props       /  >
// LifeCycle
