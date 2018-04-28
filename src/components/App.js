import React, { Component } from 'react';
import Header from './Header'
import Category from './Category'
import Data from '../data'
import '../assets/style.css'

class App extends Component {
  state = {good: "ควย", goodList: [{name: 1, rate:2},{name: 3, rate:4}]}
  
  render() {
    const goodList = Data.filter( item => item.rate >= 2.5  )
    const badList = Data.filter( item => item.rate < 2.5  )
    return (
    <div>
      <Header />
      <Category category="Good" nameList="Good1" personList={goodList} />
      <Category category="Bad" nameList="Bad1" personList={badList} />
    </div>
    );
  }
}

export default App;

// State       /  >
// Props       /  >
// LifeCycle