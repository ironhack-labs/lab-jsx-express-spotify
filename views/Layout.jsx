const React = require("react");

function Layout(props) {
  return (
    <html lang="en">
      <body>
        <head>
          <meta charSet="utf-8" />
          <title>SpotifyLab</title>
          <link rel="stylesheet" href="/styles/style.css" />
        </head>
        <header>
          <h1>SPOTIFY</h1>
          <img
            src="https://i2.wp.com/brandikaran.com/wp-content/uploads/jk-5.jpg?fit=600%2C400&ssl=1"
            alt=""
            height="70px"
            width="auto"
          />
        </header>
        <main>{props.children}</main>
        <footer>
          <h6>Page designed by Tasha and Lucia</h6>
        </footer>
      </body>
    </html>
  );
}

module.exports = Layout;
