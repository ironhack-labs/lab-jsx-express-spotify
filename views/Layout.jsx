const React = require('react');


function Layout(props) {

    return (
        <html lang="en">

            <head>
                <meta charSet="utf-8" />
                <title> Spotify </title>
                <link rel="stylesheet" href="/styles/style.css" />
            </head>

            <body>

                {props.children}
            </body>
        </html>


    )
}


module.exports = Layout;
