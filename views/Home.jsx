const React = require('react');
const Layout = require('./Layout');

function Home() {

    return (

        <Layout>
            <div id="header-image">
                <div id="form-container">
                    <form action="/artist-search" method="GET">
                        <input type="name" name="artistname" placeholder="Artist Name" />
                        <button class="button-artist" type="submit">Search for an Artist</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}


module.exports = Home;