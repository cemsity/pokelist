import React, {Component} from 'react';
import Loading from "./Loading"
import {connect} from 'react-redux'
import {deletePost} from '../actions/postActions'
class Post extends Component {

  handleClick = () => {
    this.props.deletePost(this.props.post.id)

  }
  displayPost = (post) => {
    return post ? (
      <div className='post'>
       <h4 className="center">{post.title}</h4>
       <p>{post.body}</p>
       <div className="center">
         <button className="btn grey" onClick={this.handleClick}>Delete Post</button>
       </div>
     </div>
   ) : (
     <Loading />
   )

  }

  render(){
    return(
      <div className="container">
        { this.displayPost(this.props.post) }
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post : state.posts.find(post => post.id === id)
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    deletePost : (id) => {
      dispatch(deletePost(id))
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Post);
