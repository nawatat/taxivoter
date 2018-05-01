import React, { Component } from 'react'
import AppHeader from './AppHeader'
import Category from './Category'
// import Data from '../data'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import axios from 'axios'
const { Footer, Content } = Layout

// {
        
//   this.setState(() => ({
//     goodList: res.data.filter( item => item.rate >= 2.5  ),
//     badList: res.data.filter( item => item.rate < 2.5  )
//   }))
// }
class App extends Component {
  state = { goodList: [], badList: [] }
  componentDidMount(){
    axios.get('/taxis')
      .then( res  => res.data) 
      .then( res => {
        let avgRate
        let goodList = []
        let badList = []
        res.forEach( (person) => {
          avgRate = person.rate.reduce( (sum,value) => sum+value, 0)/ person.rate.length
          if (avgRate >= 2.5)
          {
            goodList.push(person)
          }
          else
          {
            badList.push(person)
          }
        })
        this.setState(() => ({
          goodList: goodList,
          badList: badList
        }))
      })
  }
  render() {
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
