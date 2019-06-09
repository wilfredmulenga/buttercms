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
            <meta property='og:title' content='this is the title' />
            <meta property="description" content="This a the description" />
            <meta name='og:image' content='https://cdn.buttercms.com/nxPA8YzQQmOoZUAXKvjd' />
            <meta name='og:url' content={`https://zazuafrica.com${post.slug}`} />
            <meta name="twitter:card" content="summary_large_image"/>
            {/* Non-Essential, But Recommended */}
            <meta property="og:site_name" content="Zazu"/>
            {/* Non-Essential, But Required for Analytics */}
            <meta property="fb:app_id" content="your_app_id" />
            <meta name="twitter:site" content="@website-username"/>
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