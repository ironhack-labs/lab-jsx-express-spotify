const React = require('react');
const Layout = require('./Layout');


function Search (props){
    return (
    <Layout>
        <form action="/artist-search" method="GET">
            <input type="text" name="artistSearch" placeholder="Look for..." />
            <br />
        
            <button type="submit">Search for an Artist</button>
        </form>
    </Layout>  
    );
}

module.exports = Search