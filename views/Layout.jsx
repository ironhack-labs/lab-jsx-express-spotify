const React = require("react");

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link href="/styles/style.css" rel="stylesheet" />
      </head>
      <body>
        <nav>
          <img src="" />
          <a href="/">Home</a>
        </nav>
        <main>{props.children}</main>
      </body>
    </html>
  );
}

module.exports = Layout;
