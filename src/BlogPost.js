import React, { Component } from 'react';
import butter from './butter-client'
import { Helmet } from 'react-helmet'

class BlogPost extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  componentWillMount() {
    let slug = this.props.params.slug;

    butter.post.retrieve(slug).then((resp) => {
      this.setState({
        loaded: true,
        post: resp.data.data
      })
    });
  }

  render() {
    if (this.state.loaded) {
      const post = this.state.post;

      return (
        <div>
          <h1>{post.title}</h1>
          <Helmet>
            <title>Turbo Todo</title>
            <meta name="description" content="Todos on steroid!" />
            <meta name="theme-color" content="#008f68" />
            <meta name='twitter:image' content='/images/mission-people.svg' />
            <meta name='twitter:title' content={ blog.title } />
            <meta name='twitter:description' content={`https://zazuafrica.com${blog.slug}`} />
          </Helmet>
          <div dangerouslySetInnerHTML={{__html: post.body}} />
        </div>
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }
}

export default BlogPost;