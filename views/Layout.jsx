const React = require('react')


function Layout(props) {
        return (
            <html lang="en">
                <head>
                    <meta Charset="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <title>Spotify</title>
                    <link rel="stylesheet" href="/public/styles/style.css"></link>
                </head>
                <body>
                {props.children}
                </body>
            </html>
        )
}

module.exports = Layout