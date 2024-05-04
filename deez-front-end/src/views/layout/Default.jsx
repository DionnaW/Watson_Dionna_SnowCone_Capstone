import React from 'react';

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="path/to/your/custom.css" />
          {/* Add any additional meta tags, links, or scripts here */}
        </head>
        <body>
          <header>
            <h1>{this.props.title}</h1>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                {/* <li><a href="/about">About</a></li> */}
                {/* <li><a href="/contact">Contact</a></li> */}
              </ul>
            </nav>
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
