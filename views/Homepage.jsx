const React = require('react');
const Layout = require('./Layout')

function Homepage (){
    return(
        <Layout>
            <form action="/artist-search" method="GET">
            <input type="text" name="search" placeholder="Look for..." />
            <br />
            <button type="submit">Search</button>
            </form>
        </Layout>
    )
}
module.exports = Homepage;