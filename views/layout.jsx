const React = require("react");
function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="/styles/style.css" />
      </head>
      <body>
        <div className="navbar">
          <a href="/">
            <div className="logo">
              <img
                id="logo"
                src="/images/spotify-logo-horizontal-white.png"
                alt=""
              />
            </div>
          </a>
          <div className="icons">
            <img src="/images/Screen Shot 2020-11-14 at 17.37.25.png" alt="" />
          </div>
        </div>
        <div className="background">{props.children}</div>
      </body>
    </html>
  );
}
module.exports = Layout;
