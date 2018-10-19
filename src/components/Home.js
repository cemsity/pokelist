import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Pokeball from '../pokeball.png';
import Loading from './Loading';
import { connect } from 'react-redux'

class Home extends Component {

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
        <div className="center"><Loading /></div>
      )
    }

  render() {
    
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {this.displayPosts(this.props)}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    posts: state.posts,
  }
};

export default connect(mapStateToProps)(Home);
