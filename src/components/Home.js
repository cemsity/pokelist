import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Pokeball from '../pokeball.png';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [ ]
    }
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res.data)
        this.setState({
          posts: res.data.slice(0, 10)
        })
      })
    }
    displayPosts = ({posts}) => {
      return posts.length ? (
        posts.map((post) =>{
          return (
            <div className="post card" key={post.id}>
              <img  className="pokeball" src={Pokeball} alt="A pokeball" />
              <div className="card-content">
                <Link to={'/' + post.id}>
                  <span className="card-title red-text">{post.title}</span>
                </Link>
                <p>{post.body}</p>
              </div>
            </div>
          )
        })
      ) : (
        <div className="center">No Post yet</div>
      )
    }

  render() {
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {this.displayPosts(this.state)}
      </div>
    )
  }
}

export default Home;
