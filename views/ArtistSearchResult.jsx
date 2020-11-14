const React = require('react');
const Layout = require('./Layout');


function ArtistSearchResult (props){
    return (
    <Layout>
        <body>  
            <a href="" target="">
            <a href="/albums/someArtistIdGoesHere">View Albums</a>
            </a>
            {props.children}
        </body>
        
    </Layout>  
    );
}

module.exports = ArtistSearchResult