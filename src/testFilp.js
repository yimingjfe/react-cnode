/**
 * Created by yiming on 2017/6/12.
 */
import React,{Component} from 'react'
import FlipMove from './flip-move/FlipMove'

class List extends Component{
  constructor(props){
    super(props)
    this.state = {
      list:[
        'qqqqqqqqqqqq',
        'wwwwwwwwwwwww',
        'eeeeeeeeeeee',
        'rrrrrrrrrrr'
      ]
    }
  }
  deleteItem(index){
    let list = this.state.list;
    list.splice(index, 1)
    this.setState({list})
  }
  renderList(){
    const list = this.state.list
    return list.map( (item, index) => (
      <li key={index} onClick={this.deleteItem.bind(this, index)}>{item}</li>
    ))
  }
  render(){
    const items = this.renderList()
    return (
    <div className="top-list">
      <FlipMove easing="cubic-bezier(0, 0.7, 0.8, 0.1)">
        {items}
      </FlipMove>
    </div>
    )

  }
}

export default List