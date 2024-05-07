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

export default DefaultLayout;



























