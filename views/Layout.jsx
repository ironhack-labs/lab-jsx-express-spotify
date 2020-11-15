const React = require('react');


function Layout (props){
return (
    <html lang = 'en'>
        <body>
        <head>
            <meta charSet = 'utf-8' />
            <title> Spotify Express Lab</title>
            <link href="/stylesheets/style.css" rel="stylesheet" />
         </head>

        <main>
            {props.children}
        </main>
        </body>
    </html>
)
}

module.exports = Layout;