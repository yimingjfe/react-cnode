/**
 * Created by yiming on 2017/6/13.
 */
import React,{Component} from 'react'
// import FlipMove from './flip-move/FlipMove'
import FlipMove from 'react-flip-move'
function Article(props){
  return (
    <li onClick={props.deleteItem.bind(this, 3)}>{props.content}</li>
  )
}

class TopArticles extends Component {
  renderTopArticles() {
    return this.props.articles.map( article => <Article {...article} key={article.id} deleteItem={this.props.deleteItem} /> );
  }

  render() {
    return (
      <div className="top-articles">
        <FlipMove easing="cubic-bezier(0, 0.7, 0.8, 0.1)">
          { this.renderTopArticles() }
        </FlipMove>
      </div>
    );
  }
}

export default TopArticles