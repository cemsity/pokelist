import React, {Component} from 'react';
import axios from 'axios';

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      post: null
    }

  }

  componentDidMount() {
    let id = this.props.match.params.post_id;
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(res => {
        this.setState({
          post: res.data
        })

      })
  }
  displayPost = (post) =>{
    return post ? (
     <div className='post'>
       <h4 className="center">{this.state.post.title}</h4>
       <p>{this.state.post.body}</p>
     </div>
   ) : (
     <div className="center">Loading Post...</div>
   )

  }


  render(){
    return(
      <div className="container">
        { this.displayPost(this.state.post) }
      </div>
    )
  }
}

export default Post;
