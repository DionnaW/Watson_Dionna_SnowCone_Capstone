import React from 'react';
import '../../components/styles/Layout.css';

class DefaultLayout extends React.Component {
  render() {
      return (
          <html>
              <head>
                  <title>{this.props.title}</title>
              </head>
              <body>
                  <header>
                      <h1>{this.props.title}</h1>
                  </header>
                  <main>
                      {this.props.children}
                  </main>
              </body>
          </html>
      );
  }
}

// class DefaultLayout extends React.Component {
  // render() {
    // return (
      // <html>
        {/* <head> */}
          {/* <title>{this.props.title}</title> */}
          {/* <link rel="stylesheet" href="" /> */}
          {/* Add any additional meta tags, links, or scripts here */}
        // </head>
        // <body>
          {/* <header> */}
            {/* <h1>{this.props.title}</h1> */}
          {/* </header> */}
          {/* <main> */}
            {/* {this.props.children} */}
          {/* </main> */}
        {/* </body> */}
      // </html>
    // );
  // }
// }

export default DefaultLayout;



























