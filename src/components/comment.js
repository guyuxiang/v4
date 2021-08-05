import React, { Component } from 'react';

// import ThemeContext from '../context/ThemeContext';

export default class Comment extends Component {
  //   static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.commentBox = React.createRef(); // Creates a reference to inject the <script> element
  }
  componentDidMount() {
    //   const theme = this.context;
    //   const utteranceTheme = theme.dark ? "github-dark" : "github-light";
    const scriptEl = document.createElement('script');

    scriptEl.setAttribute('src', 'https://giscus.app/client.js');
    scriptEl.setAttribute('data-repo', 'guyuxiang/guyuxiang.github.io');
    scriptEl.setAttribute('data-repo-id', 'MDEwOlJlcG9zaXRvcnkxNzIyNTMyMjE=');
    scriptEl.setAttribute('data-category-id', 'DIC_kwDOCkRgJc4B-jJu');
    scriptEl.setAttribute('data-mapping', 'pathname');
    scriptEl.setAttribute('data-reactions-enabled', '0');
    scriptEl.setAttribute('data-emit-metadata', '0');
    scriptEl.setAttribute('data-theme', 'preferred_color_scheme');
    scriptEl.setAttribute('crossorigin', 'anonymous');

    this.commentBox.current.appendChild(scriptEl);
  }

  render() {
    return (
      <div className="comment-box-wrapper container pt-7">
        {/* <h2 className="mb-0">Comments</h2>
                <hr className="my-0" /> */}
        <div ref={this.commentBox} className="comment-box" />
        {/* Above element is where the comments are injected */}
      </div>
    );
  }
}
